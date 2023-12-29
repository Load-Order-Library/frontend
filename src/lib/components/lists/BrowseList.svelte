<script lang="ts">
	import ExternalIcon from '$lib/components/icons/External.svelte';
	import { formatDistanceToNow, format } from 'date-fns';
	import type { List } from '$lib/types/List';
	import { page } from '$app/stores';

	export let list: List;
</script>

<article class="flex flex-col rounded-xl bg-gray-200 p-4 text-text-light dark:bg-[#11111b] dark:text-text-dark">
	<header class="flex items-start justify-between">
		<div class="flex flex-col">
			<a
				href="/lists/{list.slug}"
				class="font-bold text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600 md:text-2xl"
				>{list.name}</a
			>
			<p>
				by <a
					href="/lists?author={list.author?.name}"
					class=" text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
					>{list.author?.name ?? 'Anonymous'}</a
				>
			</p>
		</div>
		<div class="flex flex-col text-right">
			<a
				href="/lists?game={list.game.name}"
				class="text-sm italic text-blue-600 hover:text-blue-400 active:text-blue-400 dark:text-blue-400 dark:hover:text-blue-600 dark:active:text-blue-600"
				>{list.game.name}</a
			>
			{#if list.private}
				<span
					class=" text-sm italic text-gray-600 hover:text-gray-400 active:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600 dark:active:text-gray-600"
					>Private</span
				>
			{/if}
		</div>
	</header>
	<div class=" my-4 flex flex-1 flex-col border-y border-border-light py-4 dark:border-border-dark">
		<p class="flex-1">{list.description ? list.description.slice(0, 300) + '...' : 'No description provided.'}</p>

		{#if list.readme}
			<a
				href="https://{list.readme}"
				class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				rel="noreferrer noopener"
				target="_blank">{list.readme} <ExternalIcon class="inline h-6 w-6 pl-2" /></a
			>
		{/if}
		{#if list.discord}
			<a
				href="https://{list.discord}"
				class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				rel="noreferrer noopener"
				target="_blank">{list.discord} <ExternalIcon class="inline h-6 w-6 pl-2" /></a
			>
		{/if}
		{#if list.website}
			<a
				href={list.website}
				class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				rel="noreferrer noopener"
				target="_blank">{list.website} <ExternalIcon class="inline h-6 w-6 pl-2" /></a
			>
		{/if}
	</div>
	<footer class="flex items-end justify-between space-y-1 text-sm text-slate-500 dark:text-slate-500">
		<section>
			<p title={format(new Date(list.created), 'PPpp')}>
				Created{' '}
				{formatDistanceToNow(new Date(list.created), {
					addSuffix: true,
				})}
			</p>
			<p title={format(new Date(list.updated), 'PPpp')}>
				Updated
				{formatDistanceToNow(new Date(list.updated), {
					addSuffix: true,
				})}
			</p>
			{#if list.expires}
				<p title={format(new Date(list.expires), 'PPpp')}>
					Expires
					{formatDistanceToNow(new Date(list.expires), {
						addSuffix: true,
					})}
				</p>
			{/if}
		</section>

		<section class="flex flex-col space-y-2 text-center">
			{#if list.author?.name === $page.data.user?.name || $page.data.user?.admin}
				<a
					href="/lists/{list.slug}/edit"
					class="rounded-full border-2 border-blue-500 px-4 py-2 font-bold text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
					>Edit List</a
				>
				<button
					on:click={() => alert("Delete list isn't implemented yet.")}
					type="submit"
					class="rounded-full border-2 border-red-500 px-4 py-2 font-bold text-red-500 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white"
					>Delete list</button
				>
			{/if}
		</section>
	</footer>
</article>
