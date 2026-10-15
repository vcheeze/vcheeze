import { getWriting } from '#lib/writing.js';

export const prerender = true;

export function load() {
	return {
		writing: getWriting()
	};
}
