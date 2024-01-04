<script lang="ts">
	import type { List } from '$lib/types/List';
	import { formatDistanceToNow, format } from 'date-fns';
	import ExternalIcon from '../icons/External.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import PlusIcon from '../icons/Plus.svelte';
	import DownloadIcon from '../icons/Download.svelte';
	import { page } from '$app/stores';

	async function fetchList(name: string) {
		const res = await fetch(`${PUBLIC_API_URL}/v1/files/${name}`);

		if (res.status === 200) {
			console.log(await res.json());
		}
	}

	export let list: List;
</script>

<article class="space-y-8">
	<section class="space-y-4">
		<header class="flex justify-between">
			<section class="b flex max-w-40 flex-col md:max-w-80">
				<h1 class="font-bold">
					<a class="text-xl text-green-600 hover:text-green-500 md:text-3xl" href="/lists/test-list"
						>{list.name}</a
					>
				</h1>
				<p class="font-bold">{list.version ? 'v' + list.version : ''}</p>
				<p class="mb-2">
					by <a
						class=" text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						href={list.author?.name ? '/lists?author=' + list.author.name : '/lists'}
						>Anonymous
					</a>
				</p>
				{#if list.website}
					<a
						href={list.website}
						class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						rel="noreferrer noopener"
						target="_blank"
						>{list.website} <ExternalIcon class="inline h-6 w-6 pl-2" />
					</a>
				{/if}

				{#if list.readme}
					<a
						href={list.readme}
						class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						rel="noreferrer noopener"
						target="_blank"
						>{list.readme} <ExternalIcon class="inline h-6 w-6 pl-2" />
					</a>
				{/if}

				{#if list.discord}
					<a
						href={list.discord}
						class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						rel="noreferrer noopener"
						target="_blank"
						>{list.discord}<ExternalIcon class="inline h-6 w-6 pl-2" />
					</a>
				{/if}
			</section>
			<section class="flex flex-col items-end justify-between space-y-1">
				<a class="font-bold text-blue-500 hover:text-blue-600" href="/lists?game={list.game.name}"
					>{list.game.name}</a
				><span class="italic text-slate-500">{list.private ? 'Private List' : ''}</span>
				<div class="flex flex-col items-end">
					<p
						title={format(new Date(list.created), 'PPpp')}
						class="flex text-sm text-slate-500 dark:text-slate-500"
					>
						Created{' '}
						{formatDistanceToNow(new Date(list.created), {
							addSuffix: true,
						})}
					</p>
					<p
						title={format(new Date(list.updated), 'PPpp')}
						class="flex text-sm text-slate-500 dark:text-slate-500"
					>
						Updated
						{formatDistanceToNow(new Date(list.updated), {
							addSuffix: true,
						})}
					</p>
					{#if list.expires}
						<p
							title={format(new Date(list.expires), 'PPpp')}
							class="flex text-sm text-slate-500 dark:text-slate-500"
						>
							Expires
							{formatDistanceToNow(new Date(list.expires), {
								addSuffix: true,
							})}
						</p>
					{/if}
				</div>
			</section>
		</header>
		<p class="py-4 leading-10 md:text-xl md:leading-10">
			{list.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui veritatis pariatur
			modi cupiditate architecto perferendis facere non dicta ducimus soluta est, inventore consequatur fuga delectus
			saepe incidunt quis assumenda.
		</p>

		<section class="flex w-full justify-end space-x-2 text-center">
			{#if (list.author && list.author?.name === $page.data.user?.name) || $page.data.user?.admin}
				<a
					href="/lists/{list.slug}/edit"
					class="flex rounded-full border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
					>Edit List</a
				>
				<button
					on:click={() => alert("Delete list isn't implemented yet.")}
					type="submit"
					class="flex rounded-full border border-red-500 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white"
					>Delete list</button
				>
			{/if}
		</section>
		<form class="" method="GET" action={PUBLIC_API_URL + '/v1/lists/' + list.slug + '/download'}>
			<button
				class="flex rounded-full border border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
				>All Files <DownloadIcon class="ml-2 inline h-6 w-6 " /></button
			>
		</form>
	</section>

	<section class="flex flex-col space-y-6">
		{#if list.files}
			{#each list.files as file}
				<section class="rounded-xl border border-blue-500 text-text-light dark:text-text-dark">
					<header class="flex items-center justify-between">
						<section class="">
							<button class="mr-2 rounded-l-xl bg-blue-500 p-4 text-white hover:bg-blue-600">
								<PlusIcon class="inline h-6 w-6 " />
							</button>
							<span class="font-bold text-green-600 dark:text-green-500">
								{file.clean_name}
							</span>
						</section>
						<section>
							<!-- Undefined here uses the user's browser locale -->
							<span
								>{(Number(file.bytes) / 1024).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})} KiB</span
							>
							<form
								class="inline"
								method="GET"
								action={PUBLIC_API_URL + '/v1/lists/' + list.slug + '/download/' + file.clean_name}
							>
								<button class="ml-2 rounded-r-xl bg-blue-500 p-4 text-white hover:bg-blue-600"
									><DownloadIcon class="inline h-6 w-6 " /></button
								>
							</form>
						</section>
					</header>
					<ul class="hidden border-t border-green-500" id={file.clean_name}>
						{#if file.clean_name == 'modlist.txt'}
							{#each file.content as line, i}
								<li class="flex items-center even:bg-gray-200 dark:even:bg-[#11111b]">
									<p
										class="mr-2 min-w-14 select-none self-stretch bg-blue-500 p-2 text-center text-white"
									>
										{i + 1}
									</p>
									<p>{line}</p>
								</li>
							{/each}
						{/if}
					</ul>
				</section>
			{/each}
		{/if}
	</section>
</article>
