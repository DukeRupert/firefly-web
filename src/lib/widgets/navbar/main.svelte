<script lang="ts">
	import { logo } from '$lib/constants';
	import { isNavOpen } from '$lib/stores';
	import { sitemap, contact } from '$lib/constants';

	let y = 0;
	$: opacity = Math.round(y / 5) / 100;

	function handleClick() {
		isNavOpen.update((v) => !v);
	}
</script>

<svelte:window bind:scrollY={y} />

<div
	class="fixed top-0 w-full z-50 py-6 transition-opacity ease-out duration-150"
	style={`opacity: ${opacity}; background-color: #0C1226`}
>
	<nav
		class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
		aria-label="Global"
	>
		<div class="flex items-center flex-1">
			<div class="flex items-center justify-between w-full md:w-auto">
				<a href="/">
					<span class="sr-only">{logo.title}</span>
					<img class="h-8 w-auto sm:h-10" src={logo.src} alt={logo.alt} />
				</a>
				<div class="-mr-2 flex items-center md:hidden">
					<button
						type="button"
						class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
						aria-expanded="false"
						on:click={handleClick}
					>
						<span class="sr-only">Open main menu</span>
						<!-- Heroicon name: outline/menu -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
			<div class="hidden space-x-8 md:flex md:ml-10">
				{#each sitemap as { title, href }}
					<a {href} sveltekit:prefetch class="text-base font-medium text-white hover:text-gray-300"
						>{title}</a
					>
				{/each}
			</div>
		</div>
		<div class="hidden md:flex md:items-center md:space-x-6">
			<a
				href={contact.phone.href}
				class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-500"
			>
				<svg class="h-6 w-6 mr-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
				Call
			</a>
		</div>
	</nav>
</div>
