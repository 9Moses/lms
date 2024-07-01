<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import LogOut from 'lucide-svelte/icons/log-out';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="ml-auto flex gap-x-2">
	<Button href="/" size="sm" variant="ghost">
		<LogOut />
		Exit
	</Button>

	<Avatar.Root>
		<Avatar.Image src="https://github.com/sphade.png" alt="@sphade" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>

	<form action="/?/logout" method="POST">
		<Button size="sm" type="submit">Logout</Button>
	</form>
</div>
