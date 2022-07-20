<script lang="ts">
	import PricingCard from './PricingCard.svelte';

	interface Card {
		title: string;
		price: {
			monthly: number;
			yearly: number;
		};
		features: string[];
	}

	export let cards: Card[];
</script>

<!-- Cards -->
<div
	class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0"
>
	<!-- Decorative background -->
	<div
		aria-hidden="true"
		class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
	/>

	<div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
		{#each cards as card}
			<PricingCard {card} />
		{/each}
	</div>
</div>
