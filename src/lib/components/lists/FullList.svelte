<script lang="ts">
	import type { List } from '$lib/types/List';
	import { formatDistanceToNow, format } from 'date-fns';
	import ExternalIcon from '../icons/External.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import PlusIcon from '../icons/Plus.svelte';
	import DownloadIcon from '../icons/Download.svelte';
	import ManageButtons from './ListButtons.svelte';

	export let list: List;

	let showDisabledMods = false;

	// TODO: find better solution for toggline hidden states of lists.
	let fileToggles: Record<string, { hidden: boolean }> = {};

	if (list.files) {
		for (const file of list.files) {
			fileToggles[file.clean_name] = { hidden: true };
		}
	}
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
						>{list.author?.name ?? 'Anonymous'}
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
			{list.description}
		</p>

		<ManageButtons author={list.author} slug={list.slug} />

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
							<button
								class="mr-2 {fileToggles[file.clean_name].hidden
									? 'rounded-l-xl'
									: 'rounded-tl-xl'} bg-blue-500 p-4 text-white hover:bg-blue-600"
								on:click={() =>
									(fileToggles[file.clean_name].hidden = !fileToggles[file.clean_name].hidden)}
							>
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
								<button
									class="ml-2 {fileToggles[file.clean_name].hidden
										? 'rounded-r-xl'
										: 'rounded-tr-xl'} bg-blue-500 p-4 text-white hover:bg-blue-600"
									><DownloadIcon class="inline h-6 w-6 " /></button
								>
							</form>
						</section>
					</header>
					<ul
						class="rounded-b-l hidden"
						id={file.clean_name}
						class:hidden={fileToggles[file.clean_name].hidden}
					>
						{#each file.content as line, i}
							<li
								class="flex items-center odd:bg-gray-200 dark:odd:bg-[#11111b]"
								class:hidden={line.startsWith('-') && !showDisabledMods && !line.endsWith('_separator')}
							>
								<p
									class="{line.endsWith('_separator')
										? 'hidden'
										: ''} min-w-14 select-none self-stretch bg-blue-500 p-2 text-center text-white last:rounded-bl-xl"
								>
									<span class="rounded-l-xcl">{i + 1}</span>
								</p>

								<!-- if the line is a separator -->
								{#if line.endsWith('_separator')}
									<p class="w-full bg-green-500 py-2 pl-4 text-center font-bold text-white">
										{line.replace('_separator', '').replace(/^-/, '')}
									</p>
								{:else if line.startsWith('-')}
									<p class="w-full bg-red-500 py-2 pl-4 font-bold text-white line-through">
										{line.replace(/^-/, '')}
									</p>
								{:else}
									<p class="pl-4">{line.replace(/^\+|^-/, '')}</p>
								{/if}
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		{/if}
	</section>
</article>
