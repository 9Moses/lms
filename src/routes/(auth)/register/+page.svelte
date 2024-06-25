<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { registerSchema } from '$lib/schema.js';
	import { LoaderCircle } from 'lucide-svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	export let data;
	const form = superForm(data.form, {
		validators: zodClient(registerSchema)
	});
	const { form: formData, enhance, delayed } = form;
</script>

<div class="grid h-screen w-full grid-cols-2 gap-4">
	<div class="left-1/2 top-1/2 mx-12 mt-20">
		<h1 class="py-5 text-center text-2xl font-semibold">Create An Account Here!</h1>

		<form method="POST" action="/register" use:enhance>
			<div class="grid grid-cols-2 items-center justify-center gap-4">
				<div>
					<Form.Field {form} name="firstName">
						<Form.Control let:attrs>
							<Form.Label>First Name</Form.Label>
							<Input {...attrs} bind:value={$formData.firstName} />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<div>
					<Form.Field {form} name="lastName">
						<Form.Control let:attrs>
							<Form.Label>Last Name</Form.Label>
							<Input {...attrs} bind:value={$formData.lastName} />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
			</div>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<div class="grid grid-cols-2 items-center justify-center gap-4">
				<div>
					<Form.Field {form} name="password">
						<Form.Control let:attrs>
							<Form.Label>Password</Form.Label>
							<Input type="password" {...attrs} bind:value={$formData.password} />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<div>
					<Form.Field {form} name="passwordConfirm">
						<Form.Control let:attrs>
							<Form.Label>Confirm Password</Form.Label>
							<Input type="password" {...attrs} bind:value={$formData.passwordConfirm} />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
			</div>

			<Form.Button class="my-2 w-full">
				{#if $delayed}
					<LoaderCircle class="size-6 animate-spin" />
				{:else}
					Register
				{/if}
			</Form.Button>

			<div class="my-4 flex items-center">
				<div class="flex-grow border-t border-gray-300" />

				<div class="mx-4 text-gray-500">OR</div>
				<div class="flex-grow border-t border-gray-300" />
			</div>

			<Form.Button variant="secondary" href="/login" class="w-full">Login</Form.Button>
		</form>
	</div>

	<div class="h-screen">
		<img
			src="https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-3806.jpg?t=st=1718748069~exp=1718751669~hmac=28d930922841da4552e23f151574cfd83be25c14f032dd18125c30b79d5a71b8&w=740"
			alt=""
			class="h-[90%] w-full object-cover"
		/>
	</div>
</div>
