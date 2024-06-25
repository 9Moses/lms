<script lang="ts">
	import '@fontsource-variable/noto-sans';
	import '../app.css';
	import Navbar from '$lib/components/Navbar/navbar.svelte';
</script>

<div class="h-full">
	<div class="fixed inset-y-0 z-50 h-[80px] w-full md:pl-[56]">
		<!-- Navbar -->
		<Navbar />
	</div>
	<div class="fixed inset-y-0 hidden h-full w-56 flex-col md:flex">
		<!-- Sidebar -->
	</div>
</div>

<main class="h-full pt-[80px] md:pl-56">
	<slot />
</main>

<style></style>
