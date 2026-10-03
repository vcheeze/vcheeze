<script lang="ts">
	import ArrowText from '#lib/components/ArrowText.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import SiteNav from '#lib/components/SiteNav.svelte';
	import { profile } from '#lib/content/profile.js';
	import {
		collectionPageJsonLd,
		jsonLdScript,
		personJsonLd
	} from '#lib/seo.js';
	import EnvelopeSimpleIcon from 'phosphor-svelte/lib/EnvelopeSimpleIcon';
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import LinkedinLogoIcon from 'phosphor-svelte/lib/LinkedinLogoIcon';
	import XLogoIcon from 'phosphor-svelte/lib/XLogoIcon';

	const socialIcons = {
		email: EnvelopeSimpleIcon,
		x: XLogoIcon,
		linkedin: LinkedinLogoIcon,
		github: GithubLogoIcon
	};

	const workDescription = profile.thesis;
	const workTitle = `${profile.name} · Work`;
	const workJsonLd = jsonLdScript([
		personJsonLd(),
		collectionPageJsonLd({
			path: '/work',
			name: workTitle,
			description: workDescription
		})
	]);

	let canScrollMore = $state(false);

	$effect(() => {
		const update = () => {
			const { scrollHeight } = document.documentElement;
			canScrollMore = scrollHeight - window.scrollY - window.innerHeight > 2;
		};

		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	});
</script>

<Seo
	title={workTitle}
	description={workDescription}
	path="/work"
	jsonLd={workJsonLd}
/>

<div
	aria-hidden="true"
	class="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-paper via-paper/50 to-transparent transition-opacity duration-300 ease-out motion-reduce:transition-none"
	class:opacity-0={!canScrollMore}
	class:opacity-100={canScrollMore}
></div>

<div
	class="mx-auto min-h-dvh max-w-[calc(40rem+2*var(--spacing-page))] px-page pb-[clamp(3rem,8vw,6rem)]"
>
	<header class="pt-[clamp(2.5rem,8vh,4.5rem)] pb-[clamp(2rem,6vh,3.5rem)]">
		<SiteNav current="work" />

		<h1
			class="mt-6 text-display leading-[1.05] font-normal tracking-[-0.03em] text-balance [view-transition-name:page-title]"
		>
			Work
		</h1>

		<p
			class="mt-5 max-w-[34rem] text-body text-pretty text-ink-muted [view-transition-name:page-description]"
		>
			{profile.thesis}
		</p>

		<ul class="mt-7 flex list-none flex-wrap gap-x-5 gap-y-[0.65rem] p-0">
			{#each profile.socials as social (social.id)}
				{@const Icon = socialIcons[social.id]}
				<li>
					<a
						class="inline-flex items-center gap-[0.4rem] text-meta text-ink-muted no-underline transition-colors duration-[160ms] ease-in-out hover:text-ink motion-reduce:transition-none"
						href={social.href}
						target="_blank"
						rel={social.id === 'email' ? 'external noopener noreferrer' : 'me external noopener noreferrer'}
					>
						<span class="inline-flex shrink-0 [&>svg]:block" aria-hidden="true">
							<Icon size={16} weight="regular" />
						</span>
						<span class="opacity-[0.85]">{social.handle}</span>
					</a>
				</li>
			{/each}
		</ul>
	</header>

	<main>
		<section class="mt-0" aria-labelledby="sec-now">
			<h2 id="sec-now" class="mb-5 text-title font-normal tracking-[-0.02em]">Now</h2>
			<div class="flex flex-col gap-[0.55rem]">
				<p class="m-0 font-medium">{profile.current.org}</p>
				<p class="m-0 text-meta leading-[1.45] text-ink-muted">
					{profile.current.title} · {profile.current.dates}
				</p>
				<p class="m-0">{profile.current.summary}</p>
			</div>
		</section>

		<section class="mt-[clamp(3.5rem,9vh,5.5rem)]" aria-labelledby="sec-path">
			<h2 id="sec-path" class="mb-5 text-title font-normal tracking-[-0.02em]">Path</h2>
			<ol class="m-0 flex list-none flex-col gap-7 p-0">
				{#each profile.roles as role (role.title)}
					<li class="flex flex-col gap-[0.35rem]">
						<p class="m-0 font-medium">{role.title}</p>
						<p class="m-0 text-meta leading-[1.45] text-ink-muted">{role.dates}</p>
						<p class="m-0">{role.detail}</p>
					</li>
				{/each}
			</ol>
		</section>

		<section class="mt-[clamp(3.5rem,9vh,5.5rem)]" aria-labelledby="sec-work">
			<h2 id="sec-work" class="mb-5 text-title font-normal tracking-[-0.02em]">Selected work</h2>
			<ul class="m-0 flex list-none flex-col gap-8 p-0">
				{#each profile.work as item (item.name)}
					<li>
						<article>
							<header
								class="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-[0.35rem]"
							>
								<h3 class="m-0 text-body font-medium tracking-[-0.01em]">{item.name}</h3>
								<p class="m-0 text-meta leading-[1.45] text-ink-muted">{item.dates}</p>
							</header>
							<p class="m-0 text-meta leading-[1.45] text-ink-muted">
								<ArrowText text={item.role} />
							</p>
							<p class="m-0"><ArrowText text={item.summary} /></p>
							<p class="mt-[0.65rem] text-meta leading-[1.45] text-ink-muted">{item.meta}</p>
						</article>
					</li>
				{/each}
			</ul>
		</section>

		<section class="mt-[clamp(3.5rem,9vh,5.5rem)]" aria-labelledby="sec-craft">
			<h2 id="sec-craft" class="mb-5 text-title font-normal tracking-[-0.02em]">Craft</h2>
			<ul class="m-0 mb-6 flex list-none flex-col gap-[0.4rem] p-0">
				{#each profile.skills as skill (skill)}
					<li>{skill}</li>
				{/each}
			</ul>
			<p class="mb-2">
				<span class="font-medium">{profile.education.school}</span>
				<span class="text-meta leading-[1.45] text-ink-muted">
					· {profile.education.degree} · {profile.education.dates}
				</span>
			</p>
			<p class="m-0 text-meta leading-[1.45] text-ink-muted">{profile.languages}</p>
		</section>
	</main>

	<footer class="mt-[clamp(4.5rem,12vh,7rem)]">
		<ul class="m-0 flex list-none flex-wrap gap-x-5 gap-y-[0.65rem] p-0">
			{#each profile.socials as social (social.id)}
				{@const Icon = socialIcons[social.id]}
				<li>
					<a
						class="inline-flex items-center gap-[0.4rem] text-meta text-ink-muted no-underline transition-colors duration-[160ms] ease-in-out hover:text-ink motion-reduce:transition-none"
						href={social.href}
						target="_blank"
						rel={social.id === 'email' ? 'external noopener noreferrer' : 'me external noopener noreferrer'}
					>
						<span class="inline-flex shrink-0 [&>svg]:block" aria-hidden="true">
							<Icon size={16} weight="regular" />
						</span>
						<span class="opacity-[0.85]">{social.handle}</span>
					</a>
				</li>
			{/each}
		</ul>
	</footer>
</div>
