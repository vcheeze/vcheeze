/**
 * Research reports are Svelte components, not Markdown.
 *
 * Each report lives in `src/reports/<slug>/` and must:
 * - export `metadata` from `metadata.ts`
 * - render `Report.svelte` with one outermost element using the `report` class
 * - keep its theme, layout, type, and motion in that component tree
 * - cover the viewport itself (`min-height: 100dvh` and its own background)
 * - import no site CSS, Tailwind classes, or site components
 *
 * This module loads `metadata.ts` only. The report route loads `Report.svelte`.
 */
export type ReportMeta = {
	title: string;
	description: string;
	date: string;
	/** Last substantive revision. Shown in metadata and used as dateModified. */
	updated?: string;
	tags?: string[];
	published?: boolean;
};

export type Report = ReportMeta & {
	slug: string;
};

type ReportMetaModule = {
	metadata: ReportMeta;
};

const modules = import.meta.glob<ReportMetaModule>('/src/reports/*/metadata.ts', { eager: true });

export function slugFromPath(path: string): string {
	const parts = path.split('/');
	return parts.at(-2) ?? '';
}

function isPublished(meta: ReportMeta): boolean {
	return meta.published !== false;
}

export function getReports(): Report[] {
	return Object.entries(modules)
		.map(([path, mod]) => ({
			slug: slugFromPath(path),
			...mod.metadata
		}))
		.filter(isPublished)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getReport(slug: string): Report | undefined {
	return getReports().find((report) => report.slug === slug);
}
