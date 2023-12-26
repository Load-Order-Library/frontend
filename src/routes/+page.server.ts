import type { PageServerLoad } from './$types';

import { API_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	if (locals.user) {
		const resp = await fetch(`${API_URL}/v1/lists?filter[author]=${locals.user.name}`, {
			headers: { Accept: 'application/json' },
			credentials: 'include',
		});
		const lists = await resp.json();
		return { lists };
	}
};
