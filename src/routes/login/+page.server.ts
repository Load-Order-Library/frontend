import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { parse } from 'cookie';

type Cookies = Record<string, string | Date | boolean>;

export const load: PageServerLoad = async ({ request, fetch }) => {
	const resp = await fetch('http://api.lol.wonderland/v1/user', {
		headers: { Accept: 'application/json' },
		credentials: 'include',
	});

	const user = await resp.json();
	console.log(user);

	return { user };
};

export const actions = {
	login: async ({ cookies, request, fetch }) => {
		const data = await request.formData();
		const name = data.get('name');
		const password = data.get('password');

		if (!name) {
			return fail(400, { name, missing: true });
		}

		const resp = await fetch('http://api.lol.wonderland/login', {
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

		console.log(respData);
		// Set new cookies I guess?
		const setCookies = resp.headers.getSetCookie();

		for (let i = 0; i < setCookies.length; i++) {
			let cookie: Cookies = parse(setCookies[i]);
			const name = Object.keys(cookie)[0];
			const val: string = String(cookie[name]);
			delete cookie[name];

			cookie['expires'] = new Date(String(cookie['expires']));
			cookie['httponly'] = setCookies[i].toLowerCase().indexOf('httponly') !== -1;
			cookie['secure'] = setCookies[i].toLowerCase().indexOf('secure') !== -1;

			// console.log(cookie);
			cookies.set(name, val, cookie);
		}
		return { success: true };
	},
} satisfies Actions;
