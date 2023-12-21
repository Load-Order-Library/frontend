import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

import { API_URL } from '$env/static/private';
import { useSetCookies } from '$lib/helpers/xsrf';

// export const load: PageServerLoad = async ({ request, fetch }) => {
// 	const resp = await fetch(`${API_URL}/v1/user`, {
// 		headers: { Accept: 'application/json' },
// 		credentials: 'include',
// 	});

// 	const user = await resp.json();
// 	console.log(user);

// 	return { user };
// };

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

	logout: async ({ cookies, fetch }) => {
		const resp = await fetch(`${API_URL}/logout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			credentials: 'include',
		});

		console.log(resp);

		if (resp.status !== 200) {
			console.error('Logout failed somehow');
			return fail(resp.status, { incorrect: true });
		}

		// Set the new cookies after logging out
		await useSetCookies(resp.headers.getSetCookie(), cookies);

		throw redirect(303, '/');
	},
} satisfies Actions;
