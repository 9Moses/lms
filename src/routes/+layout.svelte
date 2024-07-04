<script lang="ts">
	import '@fontsource-variable/noto-sans';
	import '../app.css';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
</script>

<Toaster richColors closeButton theme="light" />
<ModeWatcher defaultMode={'light'} />
<main class="h-screen">
	<slot />
</main>
