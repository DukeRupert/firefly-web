<script lang="ts">
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
</script>

<!-- markup (zero or more items) goes here -->
{#each [logos[index]] as { src, alt } (index)}
	<img on:click={next} transition:fade {src} {alt} class="absolute h-32 w-64 object-contain" />
{/each}
