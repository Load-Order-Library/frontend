import type { PageLoad } from './$types';

import { PUBLIC_API_URL } from '$env/static/public';
import { superValidate } from 'sveltekit-superforms/client';
import { uploadSchema } from '$lib/schemas';

export const load: PageLoad = async ({ fetch }) => {
	const resp = await fetch(`${PUBLIC_API_URL}/v1/games`, {
		headers: { Accept: 'application/json' },
		credentials: 'include',
	});
	const form = await superValidate(uploadSchema);

	return { games: await resp.json(), form };
};
