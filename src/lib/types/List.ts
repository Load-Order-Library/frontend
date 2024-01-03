export type List = {
	name: string;
	version: string;
	links: string[];
	slug: string;
	author: { name: string } | null;
	description: string;
	website: string;
	discord: string;
	readme: string;
	game: { name: string };
	created: string;
	updated: string;
	private: boolean;
	expires?: string;
};
