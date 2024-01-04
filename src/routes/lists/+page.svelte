<script>
	import BrowseList from '$lib/components/lists/BrowseList.svelte';

	export let data;

	$: ({ author, game, lists } = data);
</script>

<svelte:head>
	<title>Lists - Load Order Library</title>
</svelte:head>

<h1 class="mb-4 text-3xl font-bold">
	{game ?? 'All'} Lists {#if author}
		by <a
			href="/lists?author={author}"
			class=" text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
			>{author}</a
		>
	{/if}
</h1>

<div class="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
	{#if lists.data.length > 0}
		{#each lists.data as list}
			<BrowseList {list} />
		{/each}
	{:else}
		<p>
			No lists available to show, why not <a
				href="/upload"
				class="text-blue-600 hover:text-blue-400 active:text-blue-400 dark:text-blue-400 dark:hover:text-blue-600 dark:active:text-blue-600"
			>
				create one?
			</a>
		</p>
	{/if}
</div>
