<script>
	import ListSimple from '$lib/components/lists/ListSimple.svelte';

	let lists = [
		{ name: 'Test', links: ['https://github.com/phinocio/cool-wj-list'] },
		{ name: 'Test2', links: [] },
		{ name: 'Test3', links: [] },
		{ name: 'Test4', links: [] },
		{ name: 'Test5', links: ['https://github.com/phinocio/cool-wj-list'] },
		{ name: 'Test6', links: ['https://github.com/phinocio/cool-wj-list'] },
		{ name: 'Test7', links: [] },
		{ name: 'Test8', links: ['https://github.com/phinocio/cool-wj-list', 'phinocio.com', 'readme.example.com'] },
		{ name: 'Test9', links: [] },
	];

	// $: isLoggedIn = $user === null ? false : true;
</script>

<svelte:head>
	<title>Home - Load Order Library</title>
</svelte:head>

<h1 class="mb-4 text-3xl font-bold">All Lists</h1>

<div class="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
	{#each lists as list}
		<ListSimple {list} />
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
