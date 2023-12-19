import type { LayoutServerLoad } from './$types';
import { parse } from 'cookie';

type Cookies = Record<string, string | Date | boolean>;

// Laravel API requires hitting the /sanctum/csrf-cookie endpoint to get the CSRF token
// Doing so, sets the CSRF token as a cookie, to then use as a header for requests.
export const load: LayoutServerLoad = async ({ cookies }) => {
	if (!cookies.get('XSRF-TOKEN')) {
		await fetch('http://api.lol.wonderland/sanctum/csrf-cookie', { credentials: 'include' })
			.then((res) => {
				const setCookies = res.headers.getSetCookie();

				for (let i = 0; i < setCookies.length; i++) {
					let cookie: Cookies = parse(setCookies[i]);
					const name = Object.keys(cookie)[0];
					const val: string = String(cookie[name]);
					delete cookie[name];

					cookie['expires'] = new Date(String(cookie['expires']));
					cookie['httponly'] = setCookies[i].toLowerCase().indexOf('httponly') !== -1;
					cookie['secure'] = setCookies[i].toLowerCase().indexOf('secure') !== -1;

					// console.log(cookie);
					cookies.set(name, val, cookie);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return {};
};
