<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteNav from '#lib/components/SiteNav.svelte';
	import { profile } from '#lib/content/profile.js';
	import { formatPostDate, getPosts } from '#lib/posts.js';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOutIcon';
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

	const latestPost = getPosts()[0];

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

<svelte:head>
	<title>{profile.name} · vcheeze</title>
	<meta name="description" content={profile.intro} />
</svelte:head>

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
		<SiteNav current="home" />

		<h1
			class="mt-6 text-display leading-[1.05] font-normal tracking-[-0.03em] text-balance [view-transition-name:page-title]"
		>
			{profile.name}
		</h1>

		<p
			class="mt-5 max-w-[34rem] text-body text-pretty text-ink-muted [view-transition-name:page-description]"
		>
			{profile.intro}
		</p>

		<ul class="mt-7 flex list-none flex-wrap gap-x-5 gap-y-[0.65rem] p-0">
			{#each profile.socials as social (social.id)}
				{@const Icon = socialIcons[social.id]}
				<li>
					<a
						class="inline-flex items-center gap-[0.4rem] text-meta text-ink-muted no-underline transition-colors duration-[160ms] ease-in-out hover:text-ink motion-reduce:transition-none"
						href={social.href}
						target="_blank"
						rel="external noopener noreferrer"
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
				<p class="m-0 font-medium">
					<a
						class="border-b border-transparent text-inherit no-underline transition-colors duration-[160ms] ease-in-out hover:border-ink/30 motion-reduce:transition-none"
						href={resolve('work')}
					>
						{profile.current.org}
					</a>
				</p>
				<p class="m-0 text-meta leading-[1.45] text-ink-muted">
					{profile.current.title} · {profile.current.dates}
				</p>
				<p class="m-0">{profile.current.summary}</p>
			</div>
		</section>

		<section class="mt-[clamp(3.5rem,9vh,5.5rem)]" aria-labelledby="sec-own">
			<h2 id="sec-own" class="mb-5 text-title font-normal tracking-[-0.02em]">Things I ship</h2>
			<ul class="m-0 flex list-none flex-col gap-8 p-0">
				{#each profile.personal as item (item.url)}
					<li>
						<article>
							<header
								class="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-[0.35rem]"
							>
								<h3 class="m-0 text-body font-medium tracking-[-0.01em]">
									<a
										class="inline-flex items-center gap-[0.3em] border-b border-transparent text-inherit no-underline transition-colors duration-[160ms] ease-in-out hover:border-ink/30 motion-reduce:transition-none"
										href={item.url}
										target="_blank"
										rel="external noopener noreferrer"
									>
										{item.name}
										<span class="inline-flex opacity-55 [&>svg]:block" aria-hidden="true">
											<ArrowSquareOutIcon size="0.85em" weight="regular" />
										</span>
									</a>
								</h3>
								<p class="m-0 text-meta leading-[1.45] text-ink-muted">{item.dates}</p>
							</header>
							<p class="m-0">{item.summary}</p>
							<p class="mt-[0.65rem] text-meta leading-[1.45] text-ink-muted">{item.meta}</p>
						</article>
					</li>
				{/each}
			</ul>
		</section>

		{#if latestPost}
			<section class="mt-[clamp(3.5rem,9vh,5.5rem)]" aria-labelledby="sec-writing">
				<h2 id="sec-writing" class="mb-5 text-title font-normal tracking-[-0.02em]">Writing</h2>
				<article>
					<header
						class="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-[0.35rem]"
					>
						<h3 class="m-0 text-body font-medium tracking-[-0.01em]">
							<a
								class="border-b border-transparent text-inherit no-underline transition-colors duration-[160ms] ease-in-out hover:border-ink/30 motion-reduce:transition-none"
								href={resolve(`blog/${latestPost.slug}`)}>{latestPost.title}</a
							>
						</h3>
						<p class="m-0 text-meta leading-[1.45] text-ink-muted">
							<time datetime={latestPost.date}>{formatPostDate(latestPost.date)}</time>
						</p>
					</header>
					<p class="m-0 text-ink-muted">{latestPost.description}</p>
				</article>
				<p class="m-0 mt-8">
					<a
						class="text-meta text-ink-muted no-underline transition-colors duration-[160ms] ease-in-out hover:text-ink motion-reduce:transition-none"
						href={resolve('blog')}>All posts →</a
					>
				</p>
			</section>
		{/if}

		{#if !latestPost}
			<section class="mt-[clamp(3.5rem,9vh,5.5rem)]" aria-labelledby="sec-more">
				<h2 id="sec-more" class="mb-5 text-title font-normal tracking-[-0.02em]">More</h2>
				<ul class="m-0 flex list-none flex-col gap-7 p-0">
					<li>
						<a class="group block text-inherit no-underline" href={resolve('blog')}>
							<p
								class="m-0 text-body font-medium tracking-[-0.01em] transition-colors duration-[160ms] ease-in-out group-hover:text-ink motion-reduce:transition-none"
							>
								Writing →
							</p>
							<p class="m-0 mt-[0.35rem] text-meta leading-[1.45] text-ink-muted">
								Notes on building
							</p>
						</a>
					</li>
				</ul>
			</section>
		{/if}
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
						rel="external noopener noreferrer"
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
