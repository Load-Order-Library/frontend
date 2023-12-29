import { API_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

// TODO: Proper error handling
export const actions = {
	updateEmail: async ({ fetch, request, locals }) => {
		const formData = await request.formData();
		const email = String(formData.get('email'));

		const resp = await fetch(`${API_URL}/user/profile-information`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({ email, _method: 'put' }),
		});

		if (resp.status !== 200) {
			return fail(resp.status, { email, incorrect: true });
		}

		// Only need to update the email, saves a request to get all the new data.
		locals.user.email = email;

		return { success: true };
	},
} satisfies Actions;
