<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/widgets/navbar/index.svelte';
	import Footer from '$lib/widgets/footer/index.svelte';
</script>

<div class="relative overflow-hidden">
	<Navbar />
	<slot />
	<Footer />
</div>
