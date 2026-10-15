<script lang="ts">
	import { onMount, tick, untrack } from 'svelte';
	import { writingPath } from '#lib/paths.js';
	import { reportRootClass } from '#lib/style-boundary.js';
	import './report.css';

	const themeKey = 'report-theme';
	let mode = $state<'light' | 'dark' | null>(null);

	function applyTheme(next: 'light' | 'dark') {
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem(themeKey, next);
		} catch {
			/* The choice still applies for this visit when storage is blocked. */
		}
		mode = next;
	}

	onMount(() => {
		const saved = document.documentElement.dataset.theme;
		if (saved === 'light' || saved === 'dark') mode = saved;
		else mode = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	});

	const clockLength = 2 * Math.PI * 96;
	const clockRest = clockLength * (1 - 16.8 / 24);

	const clockTicks = Array.from({ length: 24 }, (_, hour) => {
		const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;
		const major = hour % 6 === 0;
		const inner = 112;
		const outer = major ? 120 : 116;
		return {
			hour,
			major,
			x1: 120 + inner * Math.cos(angle),
			y1: 120 + inner * Math.sin(angle),
			x2: 120 + outer * Math.cos(angle),
			y2: 120 + outer * Math.sin(angle),
			labelX: 120 + 133 * Math.cos(angle),
			labelY: 120 + 133 * Math.sin(angle) + 3.5
		};
	});

	const placeNames = {
		home: 'At home',
		indoor: 'Other indoor places',
		vehicle: 'In a vehicle',
		outdoor: 'Outdoors',
		away: 'Away from home',
		unknown: 'Location not recorded'
	} as const;

	type Place = keyof typeof placeNames;
	type Segment = { place: Place; pct: number; hm?: string; sleep?: number };
	type DayRow = { label: string; meta: string; indoor: number | null; segs: Segment[] };

	const dayRows: DayRow[] = [
		{
			label: 'United States',
			meta: '1992–94 · 9,196 diaries',
			indoor: 86.9,
			segs: [
				{ place: 'home', pct: 68.7 },
				{ place: 'indoor', pct: 18.2 },
				{ place: 'vehicle', pct: 5.5 },
				{ place: 'outdoor', pct: 7.6 }
			]
		},
		{
			label: 'Canada',
			meta: '2010–11 · 5,011 diaries',
			indoor: 88.9,
			segs: [
				{ place: 'home', pct: 69.9, sleep: 35.9, hm: '16 h 46 min' },
				{ place: 'indoor', pct: 19, hm: '4 h 33 min' },
				{ place: 'vehicle', pct: 5.3, hm: '1 h 16 min' },
				{ place: 'outdoor', pct: 5.8, hm: '1 h 23 min' }
			]
		},
		{
			label: 'Great Britain',
			meta: '2005 · 4,941 diaries',
			indoor: null,
			segs: [
				{ place: 'home', pct: 70 },
				{ place: 'away', pct: 27 },
				{ place: 'unknown', pct: 3 }
			]
		}
	];

	const ageRows = [
		{ label: 'Under 1', pct: 89.2, time: '21 h 23 min', hi: false },
		{ label: '1–4', pct: 74, hi: false },
		{ label: '5–11', pct: 71.3, hi: false },
		{ label: '12–19', pct: 69.5, hi: false },
		{ label: '20–59', pct: 66.8, time: '16 h 02 min', hi: true },
		{ label: '60 and over', pct: 77.7, time: '18 h 38 min', hi: true }
	];

	type BandKind = 'home' | 'mid' | 'out';
	type StudyId = 'seattle' | 'sandiego' | 'iquitos';
	type Study = {
		label: string;
		inner: number;
		mid: number | null;
		bands: { kind: BandKind; label: string; pct: number }[];
		meta: string;
		caveat: string;
	};

	const studies: Record<StudyId, Study> = {
		seattle: {
			label: 'Seattle area',
			inner: 125,
			mid: 1666,
			bands: [
				{ kind: 'home', label: 'Within 125 m', pct: 51 },
				{ kind: 'mid', label: '125 m to 1.7 km', pct: 12 },
				{ kind: 'out', label: 'Beyond 1.7 km', pct: 37 }
			],
			meta: '611 adults · King County, WA · 7 days, 2008–09',
			caveat:
				'Share of recorded time only. Devices logged about 8.2 valid hours a day, so much of the night, which is mostly spent at home, is missing. The true 24-hour share at home is probably higher.'
		},
		sandiego: {
			label: 'San Diego',
			inner: 200,
			mid: null,
			bands: [
				{ kind: 'home', label: 'Within 200 m', pct: 74 },
				{ kind: 'out', label: 'Beyond 200 m', pct: 26 }
			],
			meta: '599 adults aged 35–80 · San Diego County · 14 days, 2014–17',
			caveat:
				'Time with the device off was counted as time at home, which pushes the share up. Adults aged 66–80 averaged 79%, those aged 35–50 averaged 71%.'
		},
		iquitos: {
			label: 'Iquitos, Peru',
			inner: 1000,
			mid: null,
			bands: [
				{ kind: 'home', label: 'Within 1 km', pct: 81 },
				{ kind: 'out', label: 'Beyond 1 km', pct: 19 }
			],
			meta: '582 residents · Iquitos, Peru · about 15 days',
			caveat:
				"Share of GPS points, with loggers switched off from midnight to 6 a.m. This is a compact, isolated city where few people commute to one fixed workplace, so the figure won't carry over to a car-based city."
		}
	};

	const studyIds = Object.keys(studies) as StudyId[];

	const waffleCats = [
		{ key: 'same', label: 'Same home as a year ago', count: 461, pct: '92.2%' },
		{ key: 'county', label: 'Moved within the county', count: 21, pct: '4.2%' },
		{ key: 'state', label: 'Moved to another county, same state', count: 9, pct: '1.8%' },
		{ key: 'interstate', label: 'Moved to another state', count: 7, pct: '1.4%' },
		{ key: 'abroad', label: 'Moved from abroad', count: 2, pct: '0.4%' }
	] as const;

	const waffleCells = waffleCats.flatMap((cat) => Array.from({ length: cat.count }, () => cat.key));
	const hourMarks = Array.from({ length: 23 }, (_, index) => index + 1);

	function hm(pct: number) {
		const minutes = Math.round((pct / 100) * 1440);
		return `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, '0')} min`;
	}

	type Tip = { title: string; detail: string; sleep?: string };

	function segmentTip(row: DayRow, seg: Segment): Tip {
		return {
			title: `${row.label} · ${placeNames[seg.place]}`,
			detail: `${seg.pct}% · ${seg.hm || hm(seg.pct)}`,
			sleep: seg.sleep
				? `Asleep ${seg.sleep}% · awake ${(seg.pct - seg.sleep).toFixed(1)}%`
				: undefined
		};
	}

	function radiusFor(distance: number) {
		return 24 + 58 * Math.log10(distance / 40);
	}

	function formatDistance(distance: number) {
		return distance >= 1000
			? `${(distance / 1000).toFixed(distance % 1000 ? 1 : 0)} km`
			: `${distance} m`;
	}

	function reveal(node: HTMLElement) {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce || !('IntersectionObserver' in window)) {
			node.classList.add('is-in');
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					node.classList.add('is-in');
					observer.disconnect();
				}
			},
			{ threshold: 0.25 }
		);
		observer.observe(node);
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	let showIndoor = $state(false);
	let showSleep = $state(false);
	let studyId = $state<StudyId>('seattle');
	let shownId = $state<StudyId>('seattle');
	let panelOut = $state(false);
	let innerR = $state(radiusFor(125));
	let midR = $state(radiusFor(1666));
	let waffleFocus = $state<string | undefined>(undefined);
	let waffleSettled = $state(false);
	let tip = $state<Tip>();
	let tipOn = $state(false);
	let tipX = $state(0);
	let tipY = $state(0);
	let tipEl = $state<HTMLDivElement>();
	let tipGen = 0;
	let studyBooted = false;

	const activeStudy = $derived(studies[studyId]);
	const shownStudy = $derived(studies[shownId]);

	$effect(() => {
		const id = studyId;
		const study = studies[id];
		const targetInner = radiusFor(study.inner);
		const targetMid = study.mid ? radiusFor(study.mid) : targetInner;
		if (!studyBooted) {
			studyBooted = true;
			return;
		}

		const fromInner = untrack(() => innerR);
		const fromMid = untrack(() => midR);
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const duration = reduce ? 0 : 750;
		const started = performance.now();
		let frame = 0;
		const step = (now: number) => {
			const progress = duration ? Math.min(1, (now - started) / duration) : 1;
			const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
			innerR = fromInner + (targetInner - fromInner) * eased;
			midR = fromMid + (targetMid - fromMid) * eased;
			if (progress < 1) frame = requestAnimationFrame(step);
		};
		frame = requestAnimationFrame(step);
		panelOut = true;
		const timer = window.setTimeout(
			() => {
				shownId = id;
				panelOut = false;
			},
			reduce ? 0 : 180
		);
		return () => {
			cancelAnimationFrame(frame);
			window.clearTimeout(timer);
		};
	});

	async function showTip(next: Tip, x: number, y: number) {
		const gen = ++tipGen;
		tip = next;
		tipOn = true;
		await tick();
		if (gen !== tipGen || !tipEl) return;
		const width = tipEl.offsetWidth;
		const height = tipEl.offsetHeight;
		tipX = Math.min(Math.max(8, x - width / 2), window.innerWidth - width - 8);
		tipY = Math.max(8, y - height - 14);
	}

	function hideTip() {
		tipGen += 1;
		tipOn = false;
	}

	function focusWaffle(key: string) {
		waffleSettled = true;
		waffleFocus = key;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class={reportRootClass}>
	<header class="hero">
		<div class="wrap">
			<div class="topbar">
				<p class="back"><a href={writingPath()}>← Writing</a></p>
				<div class="seg" role="group" aria-label="Color scheme">
					<button type="button" aria-pressed={mode === 'light'} onclick={() => applyTheme('light')}
						>Light</button
					>
					<button type="button" aria-pressed={mode === 'dark'} onclick={() => applyTheme('dark')}
						>Dark</button
					>
				</div>
			</div>
			<div class="hero-grid">
				<div>
					<h1>The place where life happens</h1>
					<p class="lede">
						Across three national diary surveys, people spend <em>about 70% of each day at home</em
						>. Yet decisions about where and how to live often receive less deliberate attention
						than careers, cars or holidays.
					</p>
					<div class="hero-meta">
						<span>A report on time and place</span>
						<span>October 2026</span>
						<span>12 primary sources</span>
					</div>
				</div>
				<div
					class="clock"
					use:reveal
					aria-label="Clock diagram: about 16.8 of 24 hours are spent at home"
				>
					<svg viewBox="-20 -20 280 280" role="img">
						<title>About 16.8 of 24 hours at home</title>
						<g>
							{#each clockTicks as tick (tick.hour)}
								<line
									class:tick={true}
									class:major={tick.major}
									x1={tick.x1}
									y1={tick.y1}
									x2={tick.x2}
									y2={tick.y2}
								/>
								{#if tick.major}
									<text x={tick.labelX} y={tick.labelY} text-anchor="middle">{tick.hour}h</text>
								{/if}
							{/each}
						</g>
						<circle class="track" cx="120" cy="120" r="96" fill="none" stroke-width="22" />
						<circle
							class="arc"
							cx="120"
							cy="120"
							r="96"
							fill="none"
							stroke-width="22"
							stroke-dasharray={clockLength}
							style:--len={clockLength}
							style:--to={clockRest}
							transform="rotate(-90 120 120)"
						/>
						<text class="c-big" x="120" y="122" text-anchor="middle">16.8 h</text>
						<text class="c-small" x="120" y="143" text-anchor="middle">of 24 at home</text>
					</svg>
				</div>
			</div>
		</div>
	</header>

	<main>
		<section>
			<div class="wrap">
				<h2>What does time at home mean?</h2>
				<div class="prose">
					<p>
						The answer depends on what we measure. A diary can tell us how many hours someone spends
						inside their dwelling. GPS can track a radius around it. Travel surveys count journeys,
						while census data follows changes of address. Together these measures describe how home
						organizes daily life, although none can substitute for another.
					</p>
				</div>
				<dl class="defs">
					<div>
						<dt>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"><path d="M2.5 8.5 9 3l6.5 5.5V15h-13z" /></svg
							>Time in the home
						</dt>
						<dd>Hours inside the dwelling, usually from a 24-hour diary. Sleep counts.</dd>
						<span class="tag"><b>Strong</b> evidence</span>
					</div>
					<div>
						<dt>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								><circle cx="9" cy="9" r="2" /><circle cx="9" cy="9" r="6.5" /></svg
							>Time within a radius
						</dt>
						<dd>
							Clock time or GPS points inside 200 m, 1 km and so on. This needs continuous tracking.
						</dd>
						<span class="tag"><b>Partial</b>, small studies</span>
					</div>
					<div>
						<dt>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"><path d="M2 13c3-6 6-6 7-3s4 3 7-3" /></svg
							>Trips by length
						</dt>
						<dd>Counts of journeys. A short trip can start far from home.</dd>
						<span class="tag"><b>Strong</b>, but a different question</span>
					</div>
					<div>
						<dt>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"><path d="M3 15V7l3-2.5L9 7v8M9 15V9l3-2.5L15 9v6" /></svg
							>Where you live
						</dt>
						<dd>
							Moves, and distance to a parent or a birthplace. This tracks the address, not the
							hours.
						</dd>
						<span class="tag"><b>Strong</b> for the US</span>
					</div>
				</dl>
			</div>
		</section>

		<section id="day">
			<div class="wrap">
				<h2>Seven in ten hours are spent at home</h2>
				<div class="prose">
					<p>
						The US, Canadian and British diary surveys were taken twenty years apart, yet they land
						within about a point of each other. The share of the day spent at home is close to seven
						in ten. For the average person, that is roughly 16.8 hours every day.
					</p>
				</div>

				<figure use:reveal>
					<div class="controls">
						<label class="switch">
							<input type="checkbox" bind:checked={showIndoor} />
							<span class="knob"></span>Show what "90% indoors" covers
						</label>
						<label class="switch">
							<input type="checkbox" bind:checked={showSleep} />
							<span class="knob"></span>Separate sleep (Canada)
						</label>
					</div>
					<ul class="legend">
						<li><i class="sw home"></i>At home</li>
						<li><i class="sw indoor"></i>Other indoor places</li>
						<li><i class="sw vehicle"></i>In a vehicle</li>
						<li><i class="sw outdoor"></i>Outdoors</li>
						<li><i class="sw away"></i>Away (Britain: not split)</li>
						<li><i class="sw unknown"></i>Not recorded</li>
					</ul>
					<div class="day" class:show-indoor={showIndoor} class:show-sleep={showSleep}>
						{#each dayRows as row (row.label)}
							<div class="row">
								<div class="row-label">{row.label}<span>{row.meta}</span></div>
								<div class="bar-zone">
									{#if row.indoor}
										<div class="bracket" style:width="{row.indoor}%">
											<b>{row.indoor}% indoors</b>
										</div>
									{:else}
										<div class="bracket na" style:width="100%">
											<b>Indoor share not recorded</b>
										</div>
									{/if}
									<div class="bar">
										{#each row.segs as seg (`${row.label}-${seg.place}`)}
											<button
												type="button"
												class="s fill-{seg.place}"
												style:width="{seg.pct}%"
												aria-label="{row.label}, {placeNames[seg.place]}: {seg.pct}%, {seg.hm ||
													hm(seg.pct)}"
												onpointermove={(event) =>
													showTip(segmentTip(row, seg), event.clientX, event.clientY)}
												onpointerleave={hideTip}
												onfocus={(event) => {
													const box = event.currentTarget.getBoundingClientRect();
													showTip(segmentTip(row, seg), box.left + box.width / 2, box.top);
												}}
												onblur={hideTip}
											>
												{#if seg.sleep}
													<div class="sleep" style:width="{(seg.sleep / seg.pct) * 100}%"></div>
												{/if}
												{#if seg.pct >= 9}
													<span class="lbl">{Math.round(seg.pct)}%</span>
												{/if}
											</button>
										{/each}
									</div>
									<div class="scale">
										<span>0 h</span><span>6</span><span>12</span><span>18</span><span>24 h</span>
									</div>
								</div>
							</div>
						{/each}
					</div>
					<figcaption>
						Share of a 24-hour day. Hover or tab through the segments to see the hours. Sources:
						United States <sup><a href="#s1">1</a></sup>, Canada <sup><a href="#s2">2</a></sup>,
						Great Britain <sup><a href="#s3">3</a></sup>.
					</figcaption>
				</figure>

				<div class="callout">
					<div>
						<p class="q">
							"90% indoors" is about <span class="num">87–89%</span> in <i>any</i> building.
						</p>
						<p>
							That means offices, schools, shops and gyms as well as the home. The EPA's round
							figure comes from this indoor total <sup><a href="#s10">10</a></sup>. The home alone
							accounts for roughly 19 points less.
						</p>
					</div>
					<div>
						<p class="q">
							Remove sleep and the home still holds about <span class="num">8</span> waking hours.
						</p>
						<p>
							In Canada, sleep takes 35.9% of the day. The other 34% is waking time at home, which
							is more than work, school, shops and vehicles combined <sup><a href="#s2">2</a></sup>.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="wrap">
				<h2>The balance changes over a lifetime</h2>
				<div class="prose">
					<p>
						Age changes the share more than country does. Working-age adults spend the least time at
						home, though even they average about sixteen hours a day there. The number rises after
						sixty, when the home occupies an even larger part of daily experience.
					</p>
				</div>
				<figure use:reveal>
					<div class="age">
						{#each ageRows as row (row.label)}
							<div class="age-row" class:hi={row.hi}>
								<div>{row.label}</div>
								<div class="track"><div class="fill" style:--w="{row.pct}%"></div></div>
								<div class="v"><b>{row.time || hm(row.pct)}</b> · {row.pct}%</div>
							</div>
						{/each}
					</div>
					<div class="age-axis" aria-hidden="true">
						<div></div>
						<div><span>0 h</span><span>6</span><span>12</span><span>18</span><span>24 h</span></div>
						<div></div>
					</div>
					<figcaption>
						Average hours per day indoors at home, Canada, 2010–11 <sup><a href="#s2">2</a></sup>.
						Means for all ages. Women averaged about 44 minutes more at home than men, and winter
						averaged 72% against 67.5% in summer.
					</figcaption>
				</figure>
			</div>
		</section>

		<section>
			<div class="wrap">
				<h2>Daily life extends beyond the front door</h2>
				<div class="prose">
					<p>
						A dwelling is only one part of its setting. Streets, shops, parks, schools and
						workplaces determine what is within easy reach. Measuring this wider area requires GPS
						tracking. The available studies are small, local and short, and each draws the boundary
						around home differently. Pick a study below to see how the findings change with that
						boundary.
					</p>
				</div>
				<figure use:reveal>
					<div class="controls">
						<div class="seg" role="group" aria-label="Choose a study">
							{#each studyIds as id (id)}
								<button type="button" aria-pressed={studyId === id} onclick={() => (studyId = id)}
									>{studies[id].label}</button
								>
							{/each}
						</div>
					</div>
					<div class="radius">
						<svg viewBox="0 0 360 360" role="img" aria-labelledby="rad-title">
							<title id="rad-title">Concentric bands around home, not to scale</title>
							<circle class="c-out" cx="180" cy="180" r="170" />
							<circle class="c-mid" cx="180" cy="180" r={midR} />
							<circle class="ring-line" cx="180" cy="180" r={midR} />
							<circle class="c-in" cx="180" cy="180" r={innerR} />
							<path class="house" d="M180 168 l12 10 v13 h-24 v-13 z" />
							<text class="dlabel" x="180" y="28">Farther</text>
							<text class="dlabel" x="180" y={180 - midR + 16}
								>{activeStudy.mid ? formatDistance(activeStudy.mid) : ''}</text
							>
							<text class="dlabel on-accent" x="180" y={180 - innerR + 16}
								>{formatDistance(activeStudy.inner)}</text
							>
						</svg>
						<div class="fade" class:out={panelOut}>
							<ul class="bands">
								{#each shownStudy.bands as band (band.label)}
									<li>
										<i class="sw {band.kind}"></i>
										<span>{band.label}</span>
										<span class="pct">{band.pct}%</span>
									</li>
								{/each}
							</ul>
							<p class="study-meta">{shownStudy.meta}</p>
							<p class="study-caveat">{shownStudy.caveat}</p>
						</div>
					</div>
					<figcaption>
						The bands use a logarithmic scale, not true distance. The three studies measure
						different things (recorded time, follow-up time, GPS points), so compare their shapes
						and treat the exact values with caution <sup><a href="#s4">4</a></sup><sup
							><a href="#s5">5</a></sup
						><sup><a href="#s6">6</a></sup>.
					</figcaption>
				</figure>
				<div class="prose">
					<p>
						Mobile-phone studies find that people repeatedly return to a small number of places, and
						that each person has a characteristic range <sup><a href="#s11">11</a></sup>. The range
						varies enormously, however, and call records cannot tell us how many hours someone spent
						in each place.
					</p>
				</div>
			</div>
		</section>

		<section>
			<div class="wrap">
				<h2>Most journeys stay local</h2>
				<div class="prose">
					<p>
						England's National Travel Survey shows that most trips are local. It also shows that
						travelling takes up only about an hour a day. Where a home sits therefore shapes more
						than the hours indoors. It also sets the starting point for most journeys and determines
						which everyday destinations are nearby.
					</p>
				</div>
				<figure use:reveal>
					<h3>One day, 1,440 minutes</h3>
					<div class="strip-wrap">
						<div class="strip">
							{#each hourMarks as hour (hour)}
								<div class="tickline" style:left="{(hour / 24) * 100}%"></div>
							{/each}
							<div class="travel"></div>
						</div>
						<div class="strip-note">
							<span><b>58 minutes</b> travelling, about 4% of the day</span>
							<span>Everything else is spent in places</span>
						</div>
					</div>
					<h3>Trips by length, England, 2023</h3>
					<div
						class="trips"
						role="img"
						aria-label="25% of trips under 1 mile, 46% between 1 and 5 miles, 29% 5 miles or more"
					>
						<div class="t1" style:width="25%">25%</div>
						<div class="t2" style:width="46%">46%</div>
						<div class="t3" style:width="29%">29%</div>
					</div>
					<div class="trip-keys">
						<span>Under 1 mile (81% walked)</span>
						<span>1 to 5 miles</span>
						<span>5 miles or more</span>
					</div>
					<figcaption>
						Per person in 2023: 915 trips, 5,974 miles and 353 hours of travel <sup
							><a href="#s7">7</a></sup
						>. Trip length is the length of the journey wherever it starts, so it tells you nothing
						directly about time near home. Most of the miles come from the minority of long trips;
						commuting alone was 1,055 miles per person.
					</figcaption>
				</figure>
			</div>
		</section>

		<section>
			<div class="wrap">
				<h2>Home is usually a stable setting</h2>
				<div class="prose">
					<p>
						No study has tracked how a whole lifetime of hours divides up by distance. Changes of
						address offer the nearest substitute. In the United States, 92% of people lived at the
						same address as a year earlier. Of those who moved, just over half stayed in the same
						county. The setting of daily life tends to persist from one year to the next.
					</p>
				</div>
				<figure use:reveal>
					<div class="life">
						<div>
							<h3>500 Americans, one year (2023)</h3>
							<div
								class="waffle"
								class:settled={waffleSettled}
								data-focus={waffleFocus}
								role="img"
								aria-label="Of 500 people: 461 same home, 21 moved within the county, 9 moved to another county in the state, 7 moved to another state, 2 moved from abroad"
							>
								{#each waffleCells as key, index (index)}
									<i class={key} style:--d="{(index / 500) * 0.9}s"></i>
								{/each}
							</div>
							<ul class="wkeys">
								{#each waffleCats as cat (cat.key)}
									<li>
										<button
											type="button"
											onpointerenter={() => focusWaffle(cat.key)}
											onpointerleave={() => (waffleFocus = undefined)}
											onfocus={() => focusWaffle(cat.key)}
											onblur={() => (waffleFocus = undefined)}
										>
											<i class="sw {cat.key}"></i>
											<span>{cat.label}</span>
											<span class="num">{cat.pct}</span>
										</button>
									</li>
								{/each}
							</ul>
						</div>
						<div class="mom">
							<h3>Median distance to a living mother</h3>
							<svg
								viewBox="0 0 420 250"
								role="img"
								aria-label="Median miles to mother by age: 6.3 at 25–34, 11.1 at 35–44, 12.4 at 45–54, 10.1 at 55–64"
							>
								<line class="grid" x1="40" x2="400" y1="190" y2="190" />
								<line class="grid" x1="40" x2="400" y1="130" y2="130" />
								<line class="grid" x1="40" x2="400" y1="70" y2="70" />
								<text x="34" y="194" text-anchor="end">0</text>
								<text x="34" y="134" text-anchor="end">5</text>
								<text x="34" y="74" text-anchor="end">10 mi</text>
								<line class="axis" x1="40" x2="400" y1="190" y2="190" />
								<path class="line" pathLength="1" d="M85 114.4 L175 56.8 L265 41.2 L355 68.8" />
								<circle class="dot p1" cx="85" cy="114.4" r="5" />
								<circle class="dot p2" cx="175" cy="56.8" r="5" />
								<circle class="dot p3" cx="265" cy="41.2" r="5" />
								<circle class="dot p4" cx="355" cy="68.8" r="5" />
								<text class="val p1" x="85" y="100" text-anchor="middle">6.3</text>
								<text class="val p2" x="175" y="42" text-anchor="middle">11.1</text>
								<text class="val p3" x="265" y="26" text-anchor="middle">12.4</text>
								<text class="val p4" x="355" y="54" text-anchor="middle">10.1</text>
								<text x="85" y="214" text-anchor="middle">25–34</text>
								<text x="175" y="214" text-anchor="middle">35–44</text>
								<text x="265" y="214" text-anchor="middle">45–54</text>
								<text x="355" y="214" text-anchor="middle">55–64</text>
								<text x="220" y="240" text-anchor="middle">Adult child's age</text>
							</svg>
							<p class="small">
								At ages 45 to 54, 16% lived more than 500 miles from their mother, and 8% still
								lived with her. Between 18 and 54, a quarter of all life-years were spent within
								five miles of her but in a separate household <sup><a href="#s9">9</a></sup>.
							</p>
						</div>
					</div>
					<figcaption>
						Each square stands for 0.2% of the population aged 1 and over <sup
							><a href="#s8">8</a></sup
						>. Hover or focus a row in the key to pick out that group. People move most in their
						twenties (about 18 to 19% a year) and least after sixty (under 5%). The annual mover
						rate has fallen from 20.2% in 1948 to 7.8% in 2023.
					</figcaption>
				</figure>
			</div>
		</section>

		<section>
			<div class="wrap">
				<h2>What the evidence can support</h2>
				<div class="claims">
					<div class="claim">
						<div class="said">"People spend 90% of their time indoors."</div>
						<div><span class="verdict partial">Rounded, and often misread</span></div>
						<p>
							It counts every building: 86.9% in the US and 88.9% in Canada <sup
								><a href="#s1">1</a></sup
							><sup><a href="#s2">2</a></sup>. It is often misread as time at home, which is closer
							to 70%.
						</p>
					</div>
					<div class="claim">
						<div class="said">"Most of life is lived within X miles of home."</div>
						<div><span class="verdict no">Not established</span></div>
						<p>
							No national study of clock time supports a universal radius. GPS studies are local,
							and their boundaries run from 125 m to 1 km. Phone data shows that ranges vary widely
							from person to person.
						</p>
					</div>
					<div class="claim">
						<div class="said">"People live and die near where they were born."</div>
						<div><span class="verdict no">Not established</span></div>
						<p>
							The closest real measures are birth-state residence and distance to a mother. Both
							leave a large minority living far away, and neither measures hours.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="wrap">
				<h2>Give the setting its due</h2>
				<p class="pull">
					A home is more than an address or an asset. <em
						>It is the setting for most of our time.</em
					>
				</p>
				<div class="prose">
					<p>
						We routinely give more deliberate thought to careers, cars and holidays than to the
						physical setting in which most of life unfolds. The time-use evidence suggests that this
						order deserves reconsideration. About two-thirds of a day passes inside the home, while
						its location shapes access to the people and places that fill many of the remaining
						hours.
					</p>
					<p>
						The evidence does not prescribe a particular kind of home. It does not favor owning over
						renting, a large house over a small one, or the countryside over a city. Those choices
						depend on the life a person wants and can afford. What the numbers establish is the
						weight of the decision. Light, noise, comfort, privacy, layout and proximity to everyday
						destinations are repeated experiences, not minor details around a financial transaction.
					</p>
					<p class="small">
						The most defensible summary is "about 70% of the day inside the home." The diary data
						comes from the US, Canada and Britain. Climate, working patterns and urban form may
						shift the balance elsewhere, but the consistency across these surveys makes the home
						difficult to treat as background.
					</p>
				</div>
			</div>
		</section>

		<section id="sources">
			<div class="wrap">
				<h2>Sources</h2>
				<ol class="sources">
					<li id="s1">
						<a href="https://doi.org/10.1038/sj.jea.7500165">Klepeis et al. (2001)</a>, National
						Human Activity Pattern Survey. US, 1992–94, 9,386 respondents, 24-hour recall diaries.
					</li>
					<li id="s2">
						<a href="https://doi.org/10.3390/ijerph110202108">Matz et al. (2014)</a>, Canadian Human
						Activity Pattern Survey 2. 2010–11, 5,011 diaries, summer and winter. Low response rate,
						weighted.
					</li>
					<li id="s3">
						<a
							href="https://www.timeuse.org/sites/ctur/files/public/ctur_report/1905/lader_short_and_gershuny_2005_kight_diary.pdf"
							>Lader, Short & Gershuny (2006)</a
						>, ONS Time Use Survey 2005. Great Britain, ages 16 and over, 4,941 diaries, location
						recorded only as home or elsewhere.
					</li>
					<li id="s4">
						<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4312253/">Hurvitz et al. (2014)</a>,
						<i>Preventive Medicine</i> 69. King County, WA, 611 adults, 7 days of GPS and accelerometer
						data, about 8.2 valid hours a day.
					</li>
					<li id="s5">
						<a href="https://www.nature.com/articles/s41370-024-00715-5"
							>GPS heat-exposure study (2024)</a
						>, <i>J. Exposure Science & Environmental Epidemiology</i>. San Diego County, 599 adults
						aged 35–80, 14-day tracking; non-wear time counted as home.
					</li>
					<li id="s6">
						<a href="https://doi.org/10.1371/journal.pone.0058802">Vazquez-Prokopec et al. (2013)</a
						>,
						<i>PLOS ONE</i>. Iquitos, Peru, 582 residents, about 15 days; loggers off from midnight
						to 6 a.m.
					</li>
					<li id="s7">
						<a href="https://www.gov.uk/government/statistics/national-travel-survey-2023"
							>Department for Transport (2024)</a
						>, National Travel Survey 2023. Residents of England, interview plus 7-day diary.
					</li>
					<li id="s8">
						<a href="https://www.census.gov/data/tables/2023/demo/geographic-mobility/cps-2023.html"
							>US Census Bureau</a
						>, Geographic Mobility 2023 (CPS ASEC), with historical Table A-1, 1948–2023.
					</li>
					<li id="s9">
						<a href="https://doi.org/10.4054/demres.2021.45.23">Choi et al. (2021)</a>,
						<i>Demographic Research</i> 45. Panel Study of Income Dynamics, 166,098 person-years.
					</li>
					<li id="s10">
						<a href="https://www.epa.gov/report-environment/indoor-air-quality">US EPA</a>, Indoor
						Air Quality, source of the "about 90% indoors" figure.
					</li>
					<li id="s11">
						<a href="https://doi.org/10.1038/nature06958">González, Hidalgo & Barabási (2008)</a>,
						<i>Nature</i> 453. 100,000 mobile-phone users over six months.
					</li>
					<li id="s12">
						<a href="https://doi.org/10.3390/app8102007">Dėdelė et al. (2018)</a>,
						<i>Applied Sciences</i>. Kaunas, 125 adults, 7-day GPS: about 70% of time at home, a
						close match for the diary surveys.
					</li>
				</ol>
			</div>
		</section>
	</main>

	<footer>
		<div class="wrap">
			<p class="back"><a href={writingPath()}>← Writing</a></p>
			Published October 2026. Figures and caveats are documented in the sources above.
		</div>
	</footer>

	<div
		class="tip"
		class:on={tipOn}
		style:left="{tipX}px"
		style:top="{tipY}px"
		role="tooltip"
		bind:this={tipEl}
	>
		{#if tip}
			<b>{tip.title}</b><span>{tip.detail}</span>
			{#if tip.sleep}<br /><span>{tip.sleep}</span>{/if}
		{/if}
	</div>
</div>
