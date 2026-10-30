/** Who wants the thing. Leave `for` off to mean me. Use both when it is shared. */
export const people = ['me', 'wife'] as const;

export type Person = (typeof people)[number];

export type Wish = {
	name: string;
	maker?: string;
	href?: string;
	note?: string;
	price?: string;
	/** Site path (`/images/wishlist/name.jpg` in `static/`) or an image URL. */
	image?: string;
	for?: readonly Person[];
};

/**
 * Add a line here. The page at /wishlist renders this list and nothing else.
 *
 * { name: 'Name', maker: 'Maker', href: 'https://…', image: '/images/wishlist/name.jpg', note: 'Why.', price: '$40', for: ['me'] }
 * { name: 'Name', for: ['wife'] }
 * { name: 'Name', for: ['me', 'wife'] }
 */
export const wishlist: Wish[] = [
	{
		name: 'Wooting 60HE v2',
		image: '/images/wishlist/60he-v2-split-main.webp',
		href: 'https://wooting.io/wooting-60he-v2'
	},
	{
		name: 'Fujifilm X100VI',
		image: '/images/wishlist/x100vi.webp',
		href: 'https://www.fujifilm-x.com/global/products/cameras/x100vi/'
	},
	{
		name: 'FormD T1',
		image: '/images/wishlist/formd-t1.webp',
		href: 'https://formdworks.com/products/formd-t1-v2-5-sandwich-kit-silver'
	},
	{
		name: 'Yamaha Red Label FSX5',
		image: '/images/wishlist/yamaha-fsx5.webp',
		href: 'https://shop.usa.yamaha.com/en/p/instruments/guitars-basses-amps/acoustic-guitars/fsx5-gl-red-label-acoustic-electric-guitar'
	},
	{
		name: 'Porsche 911 Turbo S',
		image: '/images/wishlist/porsche-911-turbo-s.webp',
		href: 'https://configurator.porsche.com/en-US/mode/model/2026/992452'
	},
	{ name: 'Some bag', for: ['wife'], note: 'to replace her current Anna Sui' }
];

/** Mine stays unlabeled. Wife and shared items get a mark. */
export function wishWhose(item: Wish): 'Wife' | 'Both' | null {
	const who = item.for ?? ['me'];
	const mine = who.includes('me');
	const hers = who.includes('wife');
	if (mine && hers) return 'Both';
	if (hers) return 'Wife';
	return null;
}
