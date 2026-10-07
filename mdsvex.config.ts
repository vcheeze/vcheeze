import { escapeSvelte, type MdsvexOptions } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';

const theme = 'poimandres';

const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		'bash',
		'css',
		'html',
		'javascript',
		'json',
		'markdown',
		'plaintext',
		'python',
		'svelte',
		'typescript',
		'yaml'
	]
});

export const mdsvexOptions: MdsvexOptions = {
	extensions: ['.svx', '.md'],
	highlight: {
		highlighter: (code, lang) => {
			const requested = lang || 'plaintext';
			const language = highlighter.getLoadedLanguages().includes(requested)
				? requested
				: 'plaintext';
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang: language, theme }));
			return `{@html \`${html}\`}`;
		}
	},
	rehypePlugins: [rehypeSlug]
};
