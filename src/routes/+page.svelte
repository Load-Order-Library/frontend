<script>
	import ListSimple from '$lib/components/lists/ListSimple.svelte';

	export let data;

	const [user, lists] = [data.user, data.lists];
</script>

<svelte:head>
	<title>Home - Load Order Library</title>
</svelte:head>

<h1 class="mb-4 text-3xl font-bold">Your Lists</h1>

<div class="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
	{#if user}
		{#if lists.data.length > 0}
			{#each lists.data as list}
				<ListSimple {list} />
			{/each}
		{:else}
			<p>
				You have no lists, why not <a
					href="/upload"
					class="font-bold text-green-600 hover:text-green-500 active:text-blue-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
					>create one.</a
				>
			</p>
		{/if}
	{:else}
		<p>You are not logged in.</p>
	{/if}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
