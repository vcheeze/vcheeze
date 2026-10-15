import { resolve } from '$app/paths';

/** Public URLs. Route groups stay inside this module so pages do not name them. */
export function homePath() {
	return resolve('/(site)');
}

export function workPath() {
	return resolve('/(site)/work');
}

export function writingPath() {
	return resolve('/(site)/blog');
}

export function projectsPath() {
	return resolve('/(site)/projects');
}

export function postPath(slug: string) {
	return resolve('/(site)/blog/[slug]', { slug });
}

export function reportPath(slug: string) {
	return resolve('/(reports)/blog/reports/[slug]', { slug });
}
