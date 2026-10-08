<script lang="ts">
	import ProjectItem from '#lib/components/ProjectItem.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import SiteNav from '#lib/components/SiteNav.svelte';
	import { profile } from '#lib/content/profile.js';
	import { collectionPageJsonLd, jsonLdScript, pageTitle, personJsonLd } from '#lib/seo.js';

	const projectsDescription = 'Software I’ve shipped on my own, outside client work.';
	const projectsJsonLd = jsonLdScript([
		personJsonLd(),
		collectionPageJsonLd({
			path: '/projects',
			name: pageTitle('Things I’ve shipped'),
			description: projectsDescription
		})
	]);
</script>

<Seo
	title={pageTitle('Things I’ve shipped')}
	description={projectsDescription}
	path="/projects"
	jsonLd={projectsJsonLd}
/>

<div
	class="mx-auto min-h-dvh max-w-[calc(40rem+2*var(--spacing-page))] px-page pb-[clamp(3rem,8vw,6rem)]"
>
	<header class="pt-[clamp(2.5rem,8vh,4.5rem)] pb-[clamp(2rem,6vh,3.5rem)]">
		<SiteNav current="projects" />
		<h1
			class="mt-6 text-display leading-[1.05] font-normal tracking-[-0.03em] text-balance [view-transition-name:page-title]"
		>
			Things I’ve shipped
		</h1>
		<p
			class="mt-5 max-w-[34rem] text-body text-pretty text-ink-muted [view-transition-name:page-description]"
		>
			{projectsDescription}
		</p>
	</header>

	<main>
		<ul class="m-0 flex list-none flex-col gap-8 p-0">
			{#each profile.personal as item (item.url)}
				<li>
					<ProjectItem {item} headingLevel={2} />
				</li>
			{/each}
		</ul>
	</main>
</div>
