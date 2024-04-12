<script lang="ts">
	import InfoIcon from '$lib/components/icons/Info.svelte';
	import VerifiedIcon from '$lib/components/icons/Verified.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { lists } = data;

	console.log(lists);
</script>

<svelte:head>
	<title>Compare - Load Order Library</title>
</svelte:head>

<h1 class="mb-4 text-3xl font-bold">Compare Lists</h1>
<h2 class="text-2xl font-bold">Choose the First List</h2>
<p class="my-4 flex rounded-xl bg-blue-500 p-4 text-white">
	<InfoIcon class="mr-2 h-6 w-6" /> This list will act as the "source of truth" for comparisons.
</p>

<article class="grid grid-cols-1 gap-10 md:grid-cols-3">
	{#each lists.data as list}
		<section
			class="flex justify-between rounded-xl bg-gray-200 p-4 text-text-light dark:bg-[#26263a] dark:text-text-dark"
		>
			<header class="">
				<h1 class="col-span-2 font-bold">
					<a
						class="text-xl leading-none text-green-600 hover:text-green-500 md:text-2xl md:leading-none"
						href="/lists/{list.slug}">{list.name}</a
					>
				</h1>
				<a
					class="inline font-bold text-blue-500 hover:text-blue-600"
					href="/lists?filter[game]={encodeURIComponent(list.game.name)}">{list.game.name}</a
				>
				<em class="text-sm text-slate-500 dark:text-slate-500">{list.private ? 'Private List' : ''}</em>
				<p class="mb-2">
					by <a
						class=" inline-flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						href={list.author?.name ? '/lists?filter[author]=' + list.author.name : '/lists'}
						>{list.author?.name ?? 'Anonymous'}
						{#if list.author?.verified}
							<VerifiedIcon class="ml-1 inline h-4 w-4 text-blue-500" />{/if}
					</a>
				</p>
			</header>
			<a
				class="self-end rounded-xl border border-blue-500 p-2 font-bold text-blue-500 hover:text-blue-600 active:text-blue-600"
				href="/compare/{list.slug}">Choose</a
			>
		</section>
	{/each}
</article>
