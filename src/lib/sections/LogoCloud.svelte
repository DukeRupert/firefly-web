<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	interface Logo {
		src: string;
		alt: string;
	}
	const logos: Logo[] = [
		{ src: '/logo-kcc.svg', alt: 'Kagen Coffee & Crepes logo' },
		{ src: '/logo-osc.png', alt: 'One Sleep Company logo' },
		{ src: '/logo-fts.png', alt: 'FtS Excavation logo' },
		{ src: '/logo-trbc.jpg', alt: 'The Ridge Bible Church logo' },
		{ src: '/logo-ag.webp', alt: 'Aestus cRPG Guides logo' }
	];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
	class="relative bg-white max-w-6xl mx-auto rounded-lg mt-16 md:mt-24 lg:mt-32 py-16 sm:py-24 lg:py-32"
>
	<div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
		<p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
			Proudly trusted by
		</p>
		<div class="mt-8 h-32 w-64 relative flex mx-auto">
			<Carousel {logos} />
		</div>
	</div>
</div>
