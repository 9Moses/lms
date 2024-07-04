import { loginSchema } from '$lib/schema';
import { fail, redirect } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	};
};

export const actions = {
	default: async (event) => {
		const {
			locals: { pb }
		} = event;
		const form = await superValidate(event, zod(loginSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			await pb.collection('users').authWithPassword(form.data.email, form.data.password);
		} catch (e) {
			const errorMessage = (e as ClientResponseError).data?.message || 'An unknown error occurred';
			return message(form, errorMessage, { status: 400 });
		}
		return redirect(303, '/');
	}
};
