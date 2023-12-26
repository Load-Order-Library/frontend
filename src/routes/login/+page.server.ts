import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

import { API_URL } from '$env/static/private';
import { useSetCookies } from '$lib/utils/useSetCookies';

export const actions = {
	login: async ({ cookies, request, fetch }) => {
		const data = await request.formData();
		const name = data.get('name');
		const password = data.get('password');

		if (!name) {
			return fail(400, { name, missing: true });
		}

		const resp = await fetch(`${API_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({ name, password }),
		});

		const respData = await resp.json();

		if (resp.status !== 200) {
			console.error(respData);
			console.error('Login failed');
			return fail(resp.status, { name, incorrect: true, errors: respData.errors });
		}

		// Set the new cookies after logging in
		await useSetCookies(resp.headers.getSetCookie(), cookies);

		throw redirect(303, '/');
	},
} satisfies Actions;
