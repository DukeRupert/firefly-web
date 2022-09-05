<script lang="ts">
	// Todo

	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<div class="relative bg-white">
	<div class="lg:absolute lg:inset-0">
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover lg:absolute lg:h-full"
				src="/backgrounds/Valley-day.svg"
				alt="A beautiful valley with birds flying into the sun."
			/>
		</div>
	</div>
	<div
		class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2"
	>
		<div class="lg:pr-8">
			<div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
				<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's work together</h2>
				<p class="mt-4 text-lg text-gray-500 sm:mt-3">
					We would love to hear from you! Send us a message using the form below, or email us.
				</p>
				<ContactForm />
			</div>
		</div>
	</div>
</div>
