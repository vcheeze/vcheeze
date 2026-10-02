export const profile = {
	name: 'Peter Chen',
	email: 'peter.wei.chen212@gmail.com',
	intro:
		'I build things for work and for myself — platforms, products, and the occasional note about how it’s going.',
	thesis:
		'Hands-on engineer and technical lead. I design, build, and ship web platforms — from government services to AI products.',
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
			'Progressed from Microsoft Dynamics developer to full-stack engineer, technical lead, architect, and engineering manager across major government and enterprise platforms in the UAE, Saudi Arabia, and Qatar. Still writes code; prefers hands-on ownership over sitting only on the commercial side.'
	},
	roles: [
		{
			title: 'Senior Manager · Lead Software Engineer',
			dates: 'Oct 2025–present',
			detail:
				'Owns U-Ask end-to-end: client relationship, technical team, QA, partner reporting, commercials, UATs, and follow-on proposals.'
		},
		{
			title: 'Manager · Engineering Manager',
			dates: 'Oct 2022–Sep 2025',
			detail:
				'Architecture and delivery across Cognitive Proposal Builder, PIF Partner Hub, Qiddiya MSI, and another year on TAMM. Mentored engineers into tech leads.'
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
				'Founding member of the Microsoft practice. Owned Hexa’s customer portal and an internal proposal generator later reused as the basis for an AI proposal product.'
		}
	],
	work: [
		{
			name: 'TDRA U-Ask WhatsApp',
			dates: '2026',
			role: 'Engineering manager · solution architect · product owner',
			summary:
				'Agentic WhatsApp channel for UAE government services. Took over mid-flight after leadership left; soft-launched the channel, migrated GPT-4o → GPT-5.1, onboarded entities and services, and built the admin console for prompts, guardrails, and workflows.',
			meta: 'AED 7M · Next.js · FastAPI · Azure · EN/AR'
		},
		{
			name: 'TAMM',
			dates: '2019–2023',
			role: 'Engineer → technical lead · core team',
			summary:
				'Abu Dhabi’s unified government services platform. Owned the rule-based personalization engine; onboarded 200+ DMT/ITC services and 30 Department of Health facility-license services; shipped kiosk feedback UI used in 20 service centers.',
			meta: '$10M+ engagement · React · Next.js · GraphQL · EN/AR RTL'
		},
		{
			name: 'Cognitive Proposal Builder',
			dates: '2024',
			role: 'Software architect',
			summary:
				'AI-assisted proposal builder for a tech and digital company (client confidential). Built the demo that helped win the work, then owned technical conversations and key decisions through production delivery.',
			meta: '$3.7M win · Next.js · FastAPI · RAG'
		},
		{
			name: 'PIF Partners Hub',
			dates: '2024',
			role: 'Frontend / architecture lead',
			summary:
				'Partner portal for Saudi Arabia’s Public Investment Fund, including a craft.js form builder/renderer tightly coupled to Hexa on Dynamics and packagable for reuse.',
			meta: 'React · Next.js · Tailwind · EN/AR RTL'
		},
		{
			name: 'Qiddiya · Six Flags & Aquarabia',
			dates: '2025',
			role: 'Solution architect',
			summary:
				'Master systems integration architectures for food safety, QHSE, footfall analytics, smart park management, and material control — all five systems launched with the parks.',
			meta: 'Discovery & synthesis · Azure estate'
		}
	],
	personal: [
		{
			name: 'Gopher Wood Clinic',
			dates: '2020–present',
			url: 'https://gopherwoodclinic.org',
			summary:
				'Sole owner of a production clinic app in Hsinchu: appointments, staff admin, PWA, and real-time queue numbers. ~250–500 appointments per month; ~5–6 years in production.',
			meta: 'TanStack Start · CockroachDB · Fly.io'
		},
		{
			name: 'Mammon Manager',
			dates: '2023–present',
			url: 'https://mammon-manager.com',
			summary:
				'Household expense manager with shared envelopes, flexible multi-category budgets, and monthly/yearly visualizations — dogfooded daily.',
			meta: 'TanStack Start · Neon · Cloudflare'
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
