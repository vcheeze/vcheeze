import { error } from '@sveltejs/kit';
import { getReport, getReports } from '#lib/reports.js';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = 'auto';

export const entries: EntryGenerator = () => {
	return getReports().map((report) => ({ slug: report.slug }));
};

export const load: PageLoad = ({ params }) => {
	const report = getReport(params.slug);
	if (!report) error(404, 'Report not found');

	return {
		slug: report.slug,
		title: report.title,
		description: report.description,
		date: report.date,
		updated: report.updated
	};
};
