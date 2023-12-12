<script lang="ts">
	import ExternalIcon from '../icons/External.svelte';

	type List = {
		name: string;
		links: string[];
	};

	export let list: List;
</script>

<article class="flex flex-col rounded-xl bg-[#dce0e8] p-4 text-text-light dark:bg-[#11111b] dark:text-text-dark">
	<header class="flex justify-between">
		<div>
			<a
				href="#"
				class="font-bold text-green-600 hover:text-green-500 active:text-blue-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				>{list.name}</a
			>
			<p>
				by <a
					href="#"
					class=" text-green-600 hover:text-green-500 active:text-blue-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
					>Phinocio</a
				>
			</p>
		</div>
		<div>
			<a
				href="#"
				class="text-sm italic text-blue-600 hover:text-blue-400 active:text-blue-400 dark:text-blue-400 dark:hover:text-blue-600 dark:active:text-blue-600"
				>TESV Skyrim SE</a
			>
		</div>
	</header>
	<div class=" my-4 flex flex-1 flex-col border-y border-border-light py-4 dark:border-border-dark">
		<p>No description provided.</p>
		{#each list.links as link}
			<a
				href="#"
				class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
				>{link} <ExternalIcon class="inline h-6 w-6 pl-2" /></a
			>
		{/each}
	</div>
	<footer class="flex flex-none flex-col text-sm text-slate-500 dark:text-slate-600">
		<p>Updated 3 days ago</p>
		<p>Uploaded 3 days ago</p>
		<p>Expires 3 days from now</p>
	</footer>
</article>
