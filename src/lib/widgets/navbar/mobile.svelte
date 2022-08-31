<script lang="ts">
	import { logo, sitemap, contact } from '$lib/constants';
	import { isNavOpen } from '$lib/stores';
	import { slide } from 'svelte/transition';

	function fadeSlide(node, options) {
		const slideTrans = slide(node, options);
		return {
			duration: options.duration,
			css: (t) => `
				${slideTrans.css(t)}
				opacity: ${t};
			`
		};
	}

	function handleClick() {
		isNavOpen.set(false);
	}
</script>

{#if $isNavOpen}
	<div
		class="fixed top-0 inset-x-0 p-2 transition transform origin-top md:hidden {isNavOpen
			? 'z-50'
			: 'z-10'}"
		transition:fadeSlide={{ duration: 200 }}
	>
		<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
			<div class="px-5 pt-4 flex items-center justify-between">
				<div>
					<img
						class="h-14 w-auto sm:h-18 p-2 bg-primary-500 rounded-md"
						src={logo.src}
						alt={logo.alt}
					/>
				</div>
				<div class="-mr-2">
					<button
						type="button"
						class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
						on:click={handleClick}
					>
						<span class="sr-only">Close menu</span>
						<!-- Heroicon name: outline/x -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div class="pt-5 pb-6">
				<div class="px-2 space-y-1">
					{#each sitemap as { title, href }}
						<a
							{href}
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
							>{title}</a
						>
					{/each}
				</div>
				<div class="mt-6 px-5 text-center">
					<a
						href={contact.phone.href}
						class="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
						><svg
							class="inline-block h-6 w-6 mr-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>Call</a
					>
				</div>
			</div>
		</div>
	</div>
{/if}
