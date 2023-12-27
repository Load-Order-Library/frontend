import type { PageServerLoad } from './$types';

import { API_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch, locals, parent }) => {
	// if (locals.user) {
	// 	await parent();
	// 	const resp = await fetch(`${API_URL}/v1/lists?filter[author]=${locals.user.name}`, {
	// 		headers: { Accept: 'application/json' },
	// 		credentials: 'include',
	// 	});
	// 	const lists = await resp.json();
	// 	return { lists };
	// }

	const resp = await fetch(`${API_URL}/v1/lists?page[size]=5`, {
		headers: { Accept: 'application/json' },
		credentials: 'include',
	});
	const lists = await resp.json();
	return { lists };
};
