<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { titleSchema } from '$lib/schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Button } from '$lib/components/ui/button';
	import { LoaderCircle } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	export let data;
	const form = superForm(data.form, {
		validators: zodClient(titleSchema),
		onUpdated({ form }) {
			if (form.message) {
				if (!form.valid) {
					toast.error(form.message);
					console.log(form.message);
				}
			}
			console.log(form.message);
		}
	});
	const { form: formData, enhance, delayed, submitting } = form;
</script>

<div class="mx-auto flex h-full max-w-5xl border p-6 md:items-center md:justify-center">
	<div>
		<h1 class="text-2xl">Name Your course</h1>
		<p class="text-sm text-muted-foreground">
			What would you like to name your course? Don't worry, you can change it later.
		</p>
		<form action="/teacher/create" use:enhance method="POST" class="mt-8 space-y-8">
			<Form.Field {form} name="title">
				<Form.Control let:attrs>
					<Form.Label>Title</Form.Label>
					<Input disabled={$submitting} {...attrs} bind:value={$formData.title} />
				</Form.Control>
				<Form.Description>What would you teach in this course</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<div class="felx items-center gap-x-2">
				<Button variant="ghost" href="/">Cancel</Button>
				<Form.Button
					>{#if $delayed}<LoaderCircle class="size-6 animate-spin" />
					{:else}
						continue
					{/if}</Form.Button
				>
			</div>
		</form>
	</div>
</div>
