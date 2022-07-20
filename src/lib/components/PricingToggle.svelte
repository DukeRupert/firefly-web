<script lang="ts">
	import { monthlySub } from '$lib/stores';

	console.log($monthlySub);

	function monthly() {
		monthlySub.set(true);
	}

	function yearly() {
		monthlySub.set(false);
	}
</script>

<!-- Toggle -->
<div class="relative mt-12 flex justify-center sm:mt-16">
	<div class="bg-indigo-700 p-0.5 rounded-lg flex">
		<button
			type="button"
			on:click={monthly}
			class="relative {$monthlySub
				? 'bg-white border-indigo-700 text-indigo-700 hover:bg-indigo-50  focus:ring-offset-indigo-700 focus:ring-white focus:z-10'
				: 'text-indigo-200 hover:bg-indigo-800 '} py-2 px-6  rounded-md shadow-sm text-sm font-medium  whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2"
			>Monthly billing</button
		>
		<button
			type="button"
			on:click={yearly}
			class="{!$monthlySub
				? 'bg-white border-indigo-700 text-indigo-700 hover:bg-indigo-50  focus:ring-offset-indigo-700 focus:ring-white focus:z-10'
				: 'text-indigo-200 hover:bg-indigo-800 '} ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
			>Yearly billing</button
		>
	</div>
</div>
