import { useSetCookies } from '$lib/helpers/xsrf';
import type { LayoutServerLoad } from './$types';
import { API_URL } from '$env/static/private';

//TODO: Proper error handling

// Laravel API requires hitting the /sanctum/csrf-cookie endpoint to get the CSRF token
// Doing so, sets the CSRF token as a cookie, to then use as a header for requests.
export const load: LayoutServerLoad = async ({ cookies, locals }) => {
	if (!cookies.get('XSRF-TOKEN')) {
		await fetch(`${API_URL}/sanctum/csrf-cookie`, { credentials: 'include' })
			.then(async (res) => {
				await useSetCookies(res.headers.getSetCookie(), cookies);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return {
		user: locals.user,
	};
};
