import { superValidate, withFiles } from 'sveltekit-superforms/server';
import { uploadSchema } from '$lib/schemas';
import { API_URL } from '$env/static/private';
import { fail, type Actions } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	// Different schemas, so no id required.
	const form = await superValidate(zod(uploadSchema));
	const resp = await fetch(`${API_URL}/v1/games`, {
		headers: { Accept: 'application/json' },
		credentials: 'include',
	});

	// Return them both
	return { games: await resp.json(), form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, zod(uploadSchema));

		if (!form.valid) {
			return fail(400, withFiles({ form }));
		}

		const resp = await fetch(`${API_URL}/v1/lists`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({ ...form.data }),
		});

		if (resp.status !== 201) {
			console.log(await resp.json());
			return fail(resp.status, withFiles({ form }));
		}

		const data = await resp.json();

		console.log(data);

		return withFiles({ form });
	},
} satisfies Actions;
