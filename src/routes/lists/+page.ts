import { PUBLIC_API_URL } from '$env/static/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	const filters = 'author|game';
	const re = new RegExp(`${filters}`, 'g');

	let apiRoute = `${PUBLIC_API_URL}/v1/lists`;

	if (url.search) {
		const search = url.search.replace(re, `filter[$&]`);
		apiRoute = `${PUBLIC_API_URL}/v1/lists${search}`;
	}

	const resp = await fetch(apiRoute, {
		headers: { Accept: 'application/json' },
		credentials: 'include',
	});

	const data = await resp.json();
	return {
		lists: data,
		game: url.searchParams.get('game') ?? null,
		author: url.searchParams.get('author') ?? null,
	};
};
