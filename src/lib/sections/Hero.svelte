<script lang="ts">
	// innerWidth and innerHeight
	let height = 0;

	// Scroll Y position
	let y: number;

	// Set day to false when user scrolls past 1/10 height
	function changeBackgroundOnScroll(y: number, height: number) {
		let tenth = Math.round(height / 10);
		let day = y > tenth ? false : true;
		return day;
	}

	$: day = changeBackgroundOnScroll(y, height);
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div
	class="fixed -z-10 top-0 left-0 w-screen h-screen bg-gray-900 {day
		? "bg-[url('/backgrounds/Valley-day.svg')]"
		: "bg-[url('/backgrounds/Valley-night.svg')]"} bg-cover bg-center transition-all  ease-in duration-500"
/>
<div class="mx-auto max-w-6xl">
	<div
		class="mt-[30vh] mb-[50vh] mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
	>
		<div class="text-left md:max-w-4xl lg:flex lg:items-center">
			<div>
				<h1
					class="mt-4 text-4xl tracking-tight font-extrabold {day
						? 'text-gray-900'
						: 'text-gray-300'} sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl transition-colors ease-in duration-500"
				>
					<span class="block">Web Developers</span>
					<span class="text-primary-100 sm:block">Helping You Grow</span>
				</h1>
				<p
					class="mt-3 text-base font-semibold {day
						? 'text-gray-800'
						: 'text-gray-300'} sm:mt-5 sm:text-xl lg:text-lg xl:text-xl transition-colors ease-in duration-500"
				>
					The internet can be difficult. Let us deal with the web so you can focus on growing your
					business. Proudly based in Helena, MT.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden -->
