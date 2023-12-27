<script lang="ts">
	import ExternalIcon from '../icons/External.svelte';

	type List = {
		name: string;
		links: string[];
		author: { name: string } | null;
		description: string;
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
				class="font-bold text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
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
				href="#"
				class="text-sm italic text-blue-600 hover:text-blue-400 active:text-blue-400 dark:text-blue-400 dark:hover:text-blue-600 dark:active:text-blue-600"
				>{list.game.name}</a
			>
		</div>
	</header>
</article>
