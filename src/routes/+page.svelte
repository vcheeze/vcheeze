<div class="intro">
	<h1>Hello, I'm Peter.</h1>
	<p>
		I am a fullstack software engineer, working my way from the corporate world into the product and
		open source world.
	</p>
</div>

<section class="experience">
	<h2>Experience</h2>
	<div class="experienceItem">
		<h3 class="experienceItem-title">
			Lead Software Engineer @ <a href="https://www.pwc.com/m1/en.html" target="_blank"
				>PwC Middle East</a
			>
		</h3>
		<h4 class="experienceItem-subTitle">November 2018 - Present | Dubai, UAE / Remote</h4>
		<p>
			I specialize in digital transformation. Besides the notable projects that I will go into
			detail below, I also built and pitched several demos to entities such as the UAE Federal Tax
			Authority, Abu Dhabi Digital Authority, Emirates NBD (National Bank of Dubai), the Qatar Free
			Zone Authority, etc. These mainly included customized CRM and BPM solutions built on top of
			Microsoft Dynamics 365.
		</p>
		<p>My key projects include:</p>
		<div class="project">
			<h4 class="project-title"><a href="https://www.tamm.abudhabi/" target="_blank">TAMM</a></h4>
			<p class="project-description">
				A unified platform for Abu Dhabi governmental services and information.
			</p>
			<h5>My Role</h5>
			<p>
				Over a span of 4 years, I was a technical lead for 3. My work included migrating services
				from government entities, building microservices, extending the database management layer,
				contributing to the design language system, handling L3 incidents, developing core enablers,
        while leading teams of developers and working with PMs, BAs, and QAs to liase with the Abu
        Dhabi Digital Authority and other Abu Dhabi government entities.
			</p>
      <h5>Technologies used:</h5>
      <ul>
        <li><strong>Frameworks/Libraries</strong>: React, Redux, Less, Jest, Node, Express, TypeScript</li>
        <li><strong>Database</strong>: GraphQL, Apollo, MariaDB</li>
        <li><strong>Methodologies</strong>: Microservices, TDD, BDD</li>
        <li><strong>Tools</strong>: GitLab, Kibana, Jira, Confluence, Service Now, Slack</li>
      </ul>
		</div>
		<div class="project">
			<h4 class="project-title">Project Health Check</h4>
			<p class="project-description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis augue felis, sit
				amet mollis odio ullamcorper a. Etiam blandit nulla id nisi consequat ultrices.
			</p>
		</div>
		<div class="project">
			<h4 class="project-title">PGen (Proposal Generator)</h4>
			<p class="project-description">
				Nulla nunc nisi, rutrum a viverra quis, varius sed mi. Praesent vel orci placerat velit
				dignissim pharetra a vel tellus.
			</p>
		</div>
	</div>
	<div class="experienceItem">
		<h3 class="experienceItem-title">Freelance Developer @ Oren IT Solutions</h3>
		<h4 class="experienceItem-subTitle">April 2021 - Present | Remote</h4>
		<div class="project">
			<h4><a href="https://factarray.co.uk/" target="_blank">Factarray</a></h4>
		</div>
	</div>
	<div class="experienceItem">
		<h3 class="experienceItem-title">
			Architect and Developer @ <a href="https://gopherwoodclinic.org/" target="_blank"
				>Gopher Wood Clinic</a
			>
		</h3>
		<h4 class="experienceItem-subTitle">January 2020 - December 2021 | Remote</h4>
	</div>
</section>

<style lang="scss">
  @import '../styles/variables.scss';

	p {
		margin-bottom: 0.5rem;
	}
	.intro {
		margin: 10rem;
		& > h1 {
			margin-bottom: 1rem;
		}
		& > p {
			font-weight: normal;
			font-size: 1.25rem;
		}
	}

	.experience {
		margin: 10rem 10rem 6rem 10rem;
		max-width: 768px;
		& > h2 {
			margin-bottom: 1rem;
		}
		&Item {
			margin: 2rem 0;
			&-title {
				margin-bottom: 0.5rem;
			}
			&-subTitle {
				margin-bottom: 0.75rem;
			}
		}
	}

	.project {
		margin: 1.5rem 0;

		&-description {
			margin-bottom: 0.5rem;
		}
    & > h5 {
      margin-bottom: 0.25rem;
    }
	}

  @media screen and (max-width: $breakpoint-sm) {
    .intro, .experience {
      margin: 2rem;
    }
  }
</style>
