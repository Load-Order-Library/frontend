<script lang="ts">
	import ExternalIcon from '../icons/External.svelte';

	type List = {
		name: string;
		links: string[];
		author: { name: string } | null;
		description: string;
		readme: string;
		website: string;
		discord: string;
		game: { name: string };
		created: string;
		updated: string;
		expires?: string;
	};

	export let list: List;
</script>

<article class="flex flex-col rounded-xl bg-gray-200 p-4 text-text-light dark:bg-[#11111b] dark:text-text-dark">
	<header class="flex justify-between">
		<div>
			<a
				href="#"
				class="font-bold text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600 md:text-2xl"
				>{list.name}</a
			>
			<p>
				by <a
					href="#"
					class=" text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
					>{list.author?.name ?? 'Anonymous'}</a
				>
			</p>
		</div>
		<div>
			<a
				href="/lists?game={list.game.name}"
				class="text-sm italic text-blue-600 hover:text-blue-400 active:text-blue-400 dark:text-blue-400 dark:hover:text-blue-600 dark:active:text-blue-600"
				>{list.game.name}</a
			>
		</div>
	</header>
	<div class=" my-4 flex flex-1 flex-col border-y border-border-light py-4 dark:border-border-dark">
		<p class="flex-1">{list.description ?? 'No description provided.'}</p>

		{#if list.readme}
			<a
				href={list.readme}
				class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				>{list.readme} <ExternalIcon class="inline h-6 w-6 pl-2" /></a
			>
		{/if}
		{#if list.discord}
			<a
				href={list.discord}
				class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				>{list.discord} <ExternalIcon class="inline h-6 w-6 pl-2" /></a
			>
		{/if}
		{#if list.website}
			<a
				href="#"
				class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				>{list.website} <ExternalIcon class="inline h-6 w-6 pl-2" /></a
			>
		{/if}
	</div>
	<footer class="flex flex-none flex-col text-sm text-slate-500 dark:text-slate-600">
		<p>Updated: {list.updated}</p>
		<p>Uploaded {list.created}</p>
		{#if list.expires}
			<p>Expires {list.expires}</p>
		{/if}
	</footer>
</article>
