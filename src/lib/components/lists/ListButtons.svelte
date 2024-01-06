<script lang="ts">
	import type { List } from '$lib/types/List';
	import { page } from '$app/stores';

	export let slug: List['slug'];
	export let author: List['author'];
</script>

<section class="flex w-full justify-end space-x-2 text-center">
	<!-- Only the account owner is allowed to edit the list, but an admin can delete them. -->
	{#if author && author.name === $page.data.user?.name}
		<a
			href="/lists/{slug}/edit"
			class="flex rounded-full border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
			>Edit List</a
		>
	{/if}
	{#if (author && author.name === $page.data.user?.name) || $page.data.user?.admin}
		<button
			on:click={() => alert("Delete list isn't implemented yet.")}
			type="submit"
			class="flex rounded-full border border-red-500 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white"
			>Delete list</button
		>
	{/if}
</section>
