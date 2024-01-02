import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';
import { useSetCookies } from '$lib/utils/useSetCookies';

export const actions = {
	default: async ({ cookies, request, fetch, url }) => {
		const formData = await request.formData();
		const name = String(formData.get('name'));
		const remember = String(formData.get('remember')) ?? null;
		const password = String(formData.get('password'));

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
			body: JSON.stringify({ name, password, remember }),
		});

		const respData = await resp.json();

		if (resp.status !== 200) {
			return fail(resp.status, { name, incorrect: true, errMessage: respData.message });
		}

		// Set the new cookies after logging in
		await useSetCookies(resp.headers.getSetCookie(), cookies);

		const redirectTo = url.searchParams.get('redirectTo') ?? '/profile';
		throw redirect(303, `/${redirectTo.slice(1)}`);
	},
} satisfies Actions;
