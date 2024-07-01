<script lang="ts">
	import Navbar from '$lib/components/Navbar/navbar.svelte';
	import SideBar from '$lib/components/SiderBar/sideBar.svelte';
</script>

<div class="h-full">
	<div class="fixed inset-y-0 z-50 h-[80px] w-full md:pl-[56]">
		<!-- Navbar -->
		<Navbar />
	</div>
	<div class="fixed inset-y-0 hidden h-full w-56 flex-col md:flex">
		<SideBar />
	</div>
	<main class="h-full pt-[80px] md:pl-56">
		<slot />
	</main>
</div>

<style></style>
