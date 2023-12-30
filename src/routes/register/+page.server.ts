import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';
import { useSetCookies } from '$lib/utils/useSetCookies';

export const load: PageServerLoad = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/profile');
	}
};

export const actions = {
	default: async ({ cookies, request, fetch, url }) => {
		const formData = await request.formData();
		const name = String(formData.get('name'));
		const password = String(formData.get('password'));
		const password_confirmation = String(formData.get('password_confirm'));

		if (!name) {
			return fail(400, { name, missing: true });
		}

		const resp = await fetch(`${API_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({ name, password, password_confirmation }),
		});

		const respData = await resp.json();

		if (resp.status !== 201) {
			console.log(respData);
			return fail(resp.status, { name, incorrect: true, errors: respData.errors });
		}

		// Set the new cookies after logging in
		await useSetCookies(resp.headers.getSetCookie(), cookies);

		const redirectTo = url.searchParams.get('redirectTo') ?? '/profile';
		throw redirect(303, `/${redirectTo.slice(1)}`);
	},
} satisfies Actions;
