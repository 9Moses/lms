<script lang="ts">
	// your script goes here

	import SideBarRoutes from './sideBarRoutes.svelte';
</script>

<div class="flex h-full flex-col overflow-y-auto border-r bg-background shadow-sm">
	<div class="p-6">LOGO</div>
	<div class="flex w-full flex-col">
		<SideBarRoutes />
	</div>
</div>
