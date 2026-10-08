export const profile = {
	name: 'Peter Chen',
	email: 'peter.wei.chen212@gmail.com',
	intro:
		'I build software for a living, and then I go home and build more of it for myself.',
	thesis:
		'I design and ship web platforms for government services and AI products, and I lead that work from architecture through production.',
	location: 'Dubai · remote preferred',
	languages: 'English and Mandarin Chinese',
	socials: [
		{
			id: 'email' as const,
			handle: 'peter.wei.chen212@gmail.com',
			href: 'mailto:peter.wei.chen212@gmail.com'
		},
		{
			id: 'x' as const,
			handle: '@peterchenwei',
			href: 'https://x.com/peterchenwei'
		},
		{
			id: 'linkedin' as const,
			handle: 'peterweichen',
			href: 'https://linkedin.com/in/peterweichen'
		},
		{
			id: 'github' as const,
			handle: 'vcheeze',
			href: 'https://github.com/vcheeze'
		}
	],
	current: {
		org: 'PwC Middle East',
		title: 'Senior Manager · Lead Software Engineer',
		dates: 'Nov 2018–present',
		summary:
			'I started here as a Microsoft Dynamics developer. Since then the roles have been full-stack engineer, technical lead, architect, and engineering manager, on government and enterprise platforms in the UAE, Saudi Arabia, and Qatar.'
	},
	now: {
		asOf: '2026-10-07',
		lines: [
			'Right now I’m on TAMM, the unified Abu Dhabi government services platform, building the path an investor takes from a trade license to a business that can actually operate. Each step has to connect, and the next one has to be clear. I spent years on this platform before, getting separate entities onto one continuous experience and keeping it stable in production.',
			'I just finished U-Ask, a WhatsApp channel for government services in the UAE. I ran the client, the team, and the delivery, and I wrote the code when those left me free.',
			'I also keep two systems of my own running. One books appointments for a clinic in Hsinchu. The other is how my household tracks money, and I use that one every day.'
		]
	},
	roles: [
		{
			title: 'Senior Manager · Lead Software Engineer',
			dates: 'Oct 2025–present',
			detail:
				'Completed U-Ask: client point of contact, reported to the engagement partner, led the technical team, BA, QA, SITs, UATs, work reports, and invoices via finance. Now on TAMM: investor journey from trade license to an operating business.'
		},
		{
			title: 'Manager · Engineering Manager',
			dates: 'Oct 2022–Sep 2025',
			detail:
				'Architecture and delivery for Cognitive Proposal Builder, PIF Partner Hub, Qiddiya MSI, and another year on TAMM. Mentored engineers into tech leads.'
		},
		{
			title: 'Senior Associate · Senior Full-stack Engineer',
			dates: 'Oct 2019–Sep 2022',
			detail:
				'Technical lead on TAMM. Remotely led teams of up to 13 across the UAE, Canada, Pakistan, and India through COVID.'
		},
		{
			title: 'Associate · Microsoft Dynamics Consultant',
			dates: 'Nov 2018–Sep 2019',
			detail:
				'Founding member of the Microsoft practice. Hexa’s customer portal, and an internal proposal generator later reused as the base for an AI proposal product.'
		}
	],
	work: [
		{
			name: 'TDRA U-Ask WhatsApp',
			dates: '2026',
			role: 'Engineering manager · solution architect · product owner',
			summary:
				'WhatsApp channel for UAE government services. Took over mid-flight after leadership left. Soft-launched the channel, moved the model from GPT-4o to GPT-5.1, onboarded entities and services, and built the admin console for prompts, guardrails, and workflows.',
			meta: 'AED 7M · Next.js · FastAPI · Azure · EN/AR'
		},
		{
			name: 'TAMM',
			dates: '2019–2023 · 2026–present',
			role: 'Engineer → technical lead → lead software engineer',
			summary:
				'Abu Dhabi’s unified government services platform. Current scope: investor journey from trade license to an operating business. Rule-based personalization engine. Onboarded 200+ DMT/ITC services and 30 Department of Health facility-license services. Kiosk feedback UI used in 20 service centers.',
			meta: '$10M+ engagement · React · Next.js · GraphQL · EN/AR RTL'
		},
		{
			name: 'Cognitive Proposal Builder',
			dates: '2024',
			role: 'Software architect',
			summary:
				'AI-assisted proposal builder for a confidential client. The demo helped win the work. Technical decisions through delivery to production.',
			meta: '$3.7M win · Next.js · FastAPI · RAG'
		},
		{
			name: 'PIF Partners Hub',
			dates: '2024',
			role: 'Frontend / architecture lead',
			summary:
				'Partner portal for Saudi Arabia’s Public Investment Fund. Form builder and renderer in craft.js, tied to Hexa on Dynamics, packaged for reuse.',
			meta: 'React · Next.js · Tailwind · EN/AR RTL'
		},
		{
			name: 'Qiddiya · Six Flags & Aquarabia',
			dates: '2025',
			role: 'Solution architect',
			summary:
				'Integration architectures for food safety, QHSE, footfall analytics, smart park management, and material control. All five systems launched with the parks.',
			meta: 'Discovery & synthesis · Azure estate'
		}
	],
	personal: [
		{
			name: 'Gopher Wood Clinic',
			url: 'https://gopherwoodclinic.org',
			featured: true,
			summary:
				'I built this for a clinic in Hsinchu, and I still run it: appointments, staff admin, a PWA, and a live queue. It has been in production for five or six years, and it handles somewhere between 250 and 500 appointments a month.',
			meta: 'TanStack Start · CockroachDB · Fly.io'
		},
		{
			name: 'Mammon Manager',
			url: 'https://mammon-manager.com',
			featured: false,
			summary:
				'This is how my household keeps track of money. Shared envelopes, budgets that can span several categories, and charts by month or by year. I use it every day, so when something breaks, I’m the first to find out.',
			meta: 'TanStack Start · Neon · Cloudflare'
		},
		{
			name: 'Programming with Conscience',
			url: 'https://programming-with-conscience.vercel.app',
			featured: false,
			summary:
				'A guide to the anti-patterns and pet peeves that get past a linter and still break production. It comes from years of reviewing and writing code that has to ship.',
			meta: 'Code review · anti-patterns'
		}
	],
	skills: [
		'TypeScript · JavaScript · Python',
		'Next.js · SvelteKit · TanStack Start · Node · FastAPI',
		'Tailwind · design systems · Storybook · shadcn',
		'GraphQL · React Hook Form · Zod',
		'AI: agents · RAG · prompt engineering · guardrails',
		'EN/AR and RTL interfaces at platform scale'
	],
	education: {
		school: 'New York University Abu Dhabi',
		degree: 'B.S. Computer Science · concentrations in Economics and Music',
		dates: 'May 2018'
	}
} as const;
