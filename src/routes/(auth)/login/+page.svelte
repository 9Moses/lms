<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { loginSchema } from '$lib/schema.js';
	import { LoaderCircle } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { toast } from 'svelte-sonner';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(loginSchema),
		onUpdated({ form }) {
			if (form.message) {
				if (!form.valid) {
					toast.error(form.message, {
						duration: 5000,
						position: 'top-center'
					});
				} else {
					toast.success('Login Successfull', {
						duration: 5000,
						position: 'top-center'
					});
				}
			}
		}
	});

	const { form: formData, enhance, delayed } = form;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="grid h-screen w-full grid-cols-2 gap-4">
	<div class="">
		<img
			src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt=""
			class="h-full w-full object-cover"
		/>
	</div>

	<div class="left-1/2 top-1/2 mx-12 mt-20">
		<h1 class="py-5 text-center text-2xl font-semibold">Signin</h1>

		<form method="POST" action="/login" use:enhance>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input type="password" {...attrs} bind:value={$formData.password} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button class="my-2 w-full">
				{#if $delayed}
					<LoaderCircle class="size-6 animate-spin" />
				{:else}
					Login
				{/if}
			</Form.Button>

			<div class="my-4 flex items-center">
				<div class="flex-grow border-t border-gray-300" />

				<div class="mx-4 text-gray-500">OR</div>
				<div class="flex-grow border-t border-gray-300" />
			</div>

			<Form.Button variant="secondary" href="/register" class="w-full">Register</Form.Button>
		</form>
	</div>
</div>
