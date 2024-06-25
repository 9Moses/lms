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
			return fail(400, {
				form
			});
		}
		try {
			await pb.collection('users').authWithPassword(form.data.email, form.data.password);
		} catch (e) {
			const { status } = e as ClientResponseError;
			if (status === 404) {
				return message(form, { status, message: 'User does not exist' });
			}
			return message(form, { status, message: 'An error occurred' });
		}
		redirect(303, '/');
	}
};
