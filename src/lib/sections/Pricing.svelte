<script lang="ts">
	import PricingCards from '$lib/components/PricingCards.svelte';
	import PricingToggle from '$lib/components/PricingToggle.svelte';

	interface Card {
		title: string;
		price: {
			monthly: number;
			yearly: number;
		};
		features: string[];
	}

	const blog: Card = {
		title: 'Blog',
		price: {
			monthly: 50,
			yearly: 40
		},
		features: [
			'Custom domain',
			'Includes 3 custom pages',
			'Up to 10k posts',
			'Easy to edit content',
			'Basic analytics',
			'SEO friendly'
		]
	};
	const business: Card = {
		title: 'Business',
		price: {
			monthly: 150,
			yearly: 120
		},
		features: [
			'Custom domain',
			'Up to 5 custom pages',
			'Custom forms to meet your business needs',
			'Advanced site analytics',
			'Geographic SEO included (ie. Google maps, etc )',
			''
		]
	};
	const ecommerce: Card = {
		title: 'eCommerce',
		price: {
			monthly: 250,
			yearly: 200
		},
		features: [
			'Custom domain',
			'Custom storefront design',
			'Choose the eCommerce platform you prefer (ie. Shopify, WooCommerce, etc.)',
			'SEO friendly',
			'Advanced analytics to grow your conversions',
			''
		]
	};

	const cards = [blog, business, ecommerce];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-primary-100 mt-16 md:mt-24 lg:mt-32 rounded-lg">
	<div class="relative bg-primary-100 max-w-6xl mx-auto rounded-lg py-16 sm:py-24 lg:py-32">
		<div
			class="relative bg-primary-100 max-w-2xl mx-auto px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"
		>
			<h1 class="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-6xl">
				<span class="block">Simple pricing.</span>
				<span class="block">Exceptional service.</span>
			</h1>
			<p class="mt-4 text-xl text-indigo-100">
				Professional, custom web development doesn't have to break the bank.
			</p>
		</div>

		<h2 class="sr-only">Plans</h2>
		<PricingToggle />
		<PricingCards {cards} />
	</div>
</div>
