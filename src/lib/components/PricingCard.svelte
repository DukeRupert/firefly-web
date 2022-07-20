<script lang="ts">
	import { activeCard, monthlySub } from '$lib/stores';

	interface Card {
		title: string;
		price: {
			monthly: number;
			yearly: number;
		};
		features: string[];
	}
	export let card: Card;

	$: isActive = $activeCard === card.title ? true : false;

	function handleClick() {
		activeCard.set(card.title);
	}
</script>

<div
	class="{isActive
		? 'bg-white ring-indigo-700 shadow-md'
		: 'bg-indigo-700 translate-y-3'} pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12 transition-transform ease-in duration-200"
	on:click={handleClick}
	on:mouseenter={handleClick}
>
	<div>
		<h3
			class="{isActive
				? 'text-indigo-600'
				: 'text-white'} text-sm font-semibold uppercase tracking-wide"
		>
			{card.title}
		</h3>
		<div
			class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"
		>
			<div class="mt-3 flex items-center">
				<p
					class="{isActive
						? 'text-indigo-600'
						: 'text-white'} text-4xl font-extrabold tracking-tight"
				>
					${$monthlySub ? `${card.price.monthly}` : `${card.price.yearly}`}
				</p>
				<div class="ml-4">
					<p class="{isActive ? 'text-gray-700' : 'text-white'} text-sm">
						USD / {$monthlySub ? 'mo' : 'yr'}
					</p>
					<p class="{isActive ? 'text-gray-500' : 'text-indigo-200'} text-sm">
						Billed yearly (${$monthlySub
							? `${card.price.monthly * 12}`
							: `${card.price.yearly * 12}`})
					</p>
				</div>
			</div>
			<a
				href="#"
				class="{isActive
					? 'bg-indigo-600 text-white hover:bg-indigo-700'
					: 'bg-white text-indigo-600 hover:bg-indigo-50'} mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
				>Buy Starter</a
			>
		</div>
	</div>
	<h4 class="sr-only">Features</h4>
	<ul
		role="list"
		class="{isActive
			? 'border-gray-200 divide-gray-200'
			: 'border-indigo-500 divide-indigo-500'} divide-opacity-75 mt-7 border-t divide-y lg:border-t-0"
	>
		{#each card.features as feature}
			<!-- content here -->
			<li class="py-3 flex items-center">
				{#if feature}
					<!-- Heroicon name: solid/check -->
					<svg
						class="{isActive ? 'text-indigo-500' : 'text-indigo-200'} w-5 h-5 flex-shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="{isActive ? 'text-gray-600' : 'text-white'} ml-3 text-sm font-medium"
						>{feature}</span
					>
				{:else}
					<!-- Heroicon name: solid/check -->
					<svg
						class="{isActive
							? 'text-indigo-500'
							: 'text-indigo-200'} w-5 h-5 flex-shrink-0 invisible"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span
						class="{isActive ? 'text-gray-600' : 'text-white'} ml-3 text-sm font-medium invisible"
						>{feature}</span
					>
				{/if}
			</li>
		{/each}
	</ul>
</div>
