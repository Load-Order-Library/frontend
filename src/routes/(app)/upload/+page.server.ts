import { superValidate } from 'sveltekit-superforms/server';
import { uploadSchema } from '$lib/schemas';
// import { API_URL } from '$env/static/private';
import { fail, type Actions } from '@sveltejs/kit';

export const load = async () => {
	// Different schemas, so no id required.
	const form = await superValidate(uploadSchema);

	// Return them both
	return { form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate(request, uploadSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
} satisfies Actions;
