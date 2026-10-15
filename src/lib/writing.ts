import { postPath, reportPath } from '#lib/paths.js';
import { getPosts } from '#lib/posts.js';
import { getReports } from '#lib/reports.js';

export type WritingItem = {
	kind: 'post' | 'report';
	slug: string;
	title: string;
	description: string;
	date: string;
	href: string;
};

/** Posts and reports in one date-ordered list. */
export function getWriting(): WritingItem[] {
	const posts: WritingItem[] = getPosts().map((post) => ({
		kind: 'post',
		slug: post.slug,
		title: post.title,
		description: post.description,
		date: post.date,
		href: postPath(post.slug)
	}));

	const reports: WritingItem[] = getReports().map((report) => ({
		kind: 'report',
		slug: report.slug,
		title: report.title,
		description: report.description,
		date: report.date,
		href: reportPath(report.slug)
	}));

	return [...posts, ...reports].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
}
