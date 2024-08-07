<script langs="ts">
	import { Button } from '$lib/components/ui/button';
	import { Pencil } from 'lucide-svelte';
	let isEditing = false;
	function toggleEdit() {
		isEditing = !isEditing;
	}
</script>

<div class="mt-6 rounded-md border bg-muted p-4">
	<div class="flex items-center justify-between font-medium">
		Course Title
		<Button on:click={toggleEdit} type="button" variant="ghost"
			>{#if isEditing}
				cancel
			{:else}
				<Pencil class="mr-2 size-4" />
				Edit
			{/if}
		</Button>
	</div>
</div>
