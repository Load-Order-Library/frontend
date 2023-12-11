<script>
	import { page } from '$app/stores';
	import '../app.css';

	export let hidden = true;

	$: $page.url && (hidden = true);
</script>

<header class="border-border-light dark:border-border-dark mb-6 border-b bg-green-500 text-black dark:text-white">
	<nav class="container mx-auto flex flex-col px-4 md:flex-row lg:px-40">
		<div class="flex items-center justify-between">
			<a href="/" class="text-2xl font-bold md:mr-6">Load Order Library</a>
			<button
				type="button"
				on:click={() => (hidden = !hidden)}
				aria-label="Toggle menu"
				class="rounded hover:bg-red-400 active:bg-red-400 dark:hover:bg-red-500 dark:active:bg-red-500 md:hidden"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
					<path
						d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
					></path>
				</svg>
			</button>
		</div>
		<div
			class="mt-2 hidden w-full flex-col text-center md:mt-0 md:flex md:flex-row md:items-center md:justify-between"
			class:hidden
			aria-hidden={hidden}
		>
			<div class="flex flex-col md:flex-row">
				<a
					href="/projects"
					class="rounded-2xl py-2 hover:bg-red-300 active:bg-red-300 dark:hover:bg-red-500 dark:active:bg-red-500 md:px-4"
					>Projects</a
				>
				<a
					href="/thoughts"
					class="rounded-2xl py-2 hover:bg-red-300 active:bg-red-300 dark:hover:bg-red-500 dark:active:bg-red-500 md:px-4"
					>Random Thoughts</a
				>
			</div>
			<div class="flex justify-center md:justify-end">
				<a
					href="https://discord.gg/K3KnEgrQE4"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-2xl px-4 py-2 hover:bg-red-400 active:bg-red-400 dark:hover:bg-red-500 dark:active:bg-red-500"
				>
					<x-icons.discord />
				</a>
				<a
					href="https://github.com/phinocio"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-2xl px-4 py-2 hover:bg-red-400 active:bg-red-400 dark:hover:bg-red-500 dark:active:bg-red-500"
				>
					<x-icons.github />
				</a>
			</div>
		</div>
	</nav>
</header>

<main class="container mx-auto mb-20 flex h-full flex-grow flex-col px-4 lg:px-40">
	<slot />
</main>
