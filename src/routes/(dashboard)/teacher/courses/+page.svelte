<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { PlusCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Courses</title>
</svelte:head>

<div class="p-6">
	<div class="flex items-center py-4">
		<Button href="/teacher/create" class="ml-auto">
			<PlusCircle class="mr-2 size-4" />
			New Cousrse
		</Button>
	</div>
</div>
