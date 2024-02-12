import { superValidate } from 'sveltekit-superforms/server';
import { uploadSchema } from '$lib/schemas';

export const load = async () => {
	// Different schemas, so no id required.
	const form = await superValidate(uploadSchema);

	// Return them both
	return { form };
};
