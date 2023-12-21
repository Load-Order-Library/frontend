type myCookies = Record<string, string | Date | boolean>;

import type { Cookies } from '@sveltejs/kit';
import { parse } from 'cookie';

//TODO: Proper error handling

// TODO: I think this method of checking if the XSRF-TOKEN doesn't exist to then fetch it is flawed when
// actually being logged in and whatnot... but need to test it first
export async function useSetCookies(setCookies: string[], cookies: Cookies) {
	for (let i = 0; i < setCookies.length; i++) {
		let cookie: myCookies = parse(setCookies[i]);
		const name = Object.keys(cookie)[0];
		const val: string = String(cookie[name]);
		delete cookie[name];

		cookie['expires'] = new Date(String(cookie['expires']));
		cookie['httponly'] = setCookies[i].toLowerCase().indexOf('httponly') !== -1;
		cookie['secure'] = setCookies[i].toLowerCase().indexOf('secure') !== -1;

		cookies.set(name, val, cookie);
	}
}
