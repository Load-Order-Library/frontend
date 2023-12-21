import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const resp = await fetch(`http://api.lol.wonderland/v1/lists?filter[author]=phinocio`);
	const lists = await resp.json();
	return { lists };
};
