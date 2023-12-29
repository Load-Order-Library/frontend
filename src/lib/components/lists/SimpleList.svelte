<script lang="ts">
	import type { List } from '$lib/types/List';

	export let list: List;
</script>

<article class="items-center rounded-xl bg-gray-200 p-4 text-text-light dark:bg-[#11111b] dark:text-text-dark">
	<h2 class="flex justify-between text-2xl font-bold">
		<a
			href="#"
			class="font-bold text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
			>{list.name}</a
		>
		<a
			href="#"
			class=" text-sm italic text-blue-600 hover:text-blue-400 active:text-blue-400 dark:text-blue-400 dark:hover:text-blue-600 dark:active:text-blue-600"
			>{list.game.name}</a
		>
	</h2>
	<span class="text-base">
		by <a
			href="#"
			class=" text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
			>{list.author?.name ?? 'Anonymous'}</a
		>
	</span>
</article>
