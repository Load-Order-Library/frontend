import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData(); // TODO log the user in
		await fetch('http://127.0.0.1:8000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.get('name'),
				password: data.get('password'),
			}),
		});
	},
} satisfies Actions;
