<script lang="ts">
	import SimpleHero from '$lib/components/SimpleHero.svelte';
	import Cta from '$lib/sections/CTA.svelte';
	import Features from '$lib/sections/Features.svelte';
	import LogoCloud from '$lib/sections/LogoCloud.svelte';

	const Hero = {
		title: {
			text: 'Modern Website Development',
			focus: 'in Helena, MT'
		},
		text: `Our professional web developers create exceptional online experiences to help you grow your business.`,
		primaryAction: {
			label: 'Get started',
			href: '/contact-us'
		},
		secondaryAction: {
			label: 'Learn More',
			href: '#features'
		},
		image: {
			src: '/laptop-blue.png',
			alt: 'Todo'
		}
	};
</script>

<main>
	<SimpleHero {Hero} />
	<Features />
	<LogoCloud />
	<Cta />
</main>
