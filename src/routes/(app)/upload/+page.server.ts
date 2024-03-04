import { superValidate, withFiles } from 'sveltekit-superforms/server';
import { uploadSchema } from '$lib/schemas';
import { API_URL } from '$env/static/private';
import { fail, type Actions } from '@sveltejs/kit';

export const load = async () => {
	// Different schemas, so no id required.
	const form = await superValidate(uploadSchema);
	const resp = await fetch(`${API_URL}/v1/games`, {
		headers: { Accept: 'application/json' },
		credentials: 'include',
	});

	// Return them both
	return { games: await resp.json(), form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate(request, uploadSchema);

		if (!form.valid) {
			return fail(400, withFiles({ form }));
		}

		return withFiles({ form });
	},
} satisfies Actions;
