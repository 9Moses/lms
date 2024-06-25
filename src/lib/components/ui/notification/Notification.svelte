<!-- src/lib/components/ui/Notification.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let message = '';
	export let type = 'error'; // 'error', 'success', etc.
	export let show = false;
	const dispatch = createEventDispatcher();

	function close() {
		show = false;
		dispatch('close');
	}
</script>

<div class="notification {type}" class:show>
	<p>{message}</p>
	<button on:click={close}>X</button>
</div>

<style>
	.notification {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		padding: 1rem;
		border-radius: 0.25rem;
		background-color: var(--color-bg);
		color: var(--color-text);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
	.notification.error {
		--color-bg: #f44336;
		--color-text: #fff;
	}
	.notification.success {
		--color-bg: #4caf50;
		--color-text: #fff;
	}
</style>
