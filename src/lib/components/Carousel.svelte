<script lang="ts">
	import { quintIn, quintOut } from 'svelte/easing';

	import { fade } from 'svelte/transition';

	interface Logo {
		src: string;
		alt: string;
	}

	export let logos: Logo[];

	let index = 0;

	const next = () => {
		index = (index + 1) % logos.length;
	};

	setInterval(next, 3000);
</script>

<!-- markup (zero or more items) goes here -->
{#each [logos[index]] as { src, alt } (index)}
	<img
		on:click={next}
		in:fade={{ duration: 500, easing: quintIn }}
		{src}
		{alt}
		class="absolute h-40 w-60 object-contain"
	/>
{/each}
