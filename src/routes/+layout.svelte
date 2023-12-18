<script>
	import { page } from '$app/stores';
	import '../app.css';

	import Logo from '$lib/assets/Logo.svelte';

	import MenuIcon from '$lib/components/icons/Menu.svelte';
	import DiscordIcon from '$lib/components/icons/Discord.svelte';
	import GitHubIcon from '$lib/components/icons/GitHub.svelte';

	export let hidden = true;

	$: $page.url && (hidden = true);
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#2b5797" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<header class="mb-6 border-b-2 border-green-400 dark:border-green-800 dark:text-white">
	<nav class="container mx-auto flex flex-col items-center px-4 py-4 text-xl md:flex-row lg:px-20">
		<div class="flex w-full items-center justify-between md:w-auto">
			<a href="/" class="text-2xl font-bold md:mr-4"
				><Logo class="h-8 w-8 text-green-500 hover:text-green-400" />
			</a>
			<p class="md:hidden">Load Order Library</p>
			<button
				type="button"
				on:click={() => (hidden = !hidden)}
				aria-label="Toggle menu"
				class="rounded text-green-500 hover:bg-blue-400 active:bg-blue-400 active:text-white dark:hover:bg-blue-500 dark:active:bg-blue-500 md:hidden"
			>
				<MenuIcon class="h-8 w-8" />
			</button>
		</div>
		<div
			class="mt-2 hidden w-full flex-col text-center md:mt-0 md:flex md:flex-row md:items-center md:justify-between"
			class:hidden
		>
			<div class="flex flex-col border-t border-border-light dark:border-border-dark md:flex-row md:border-none">
				<a
					href="/upload"
					class="rounded-xl px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
					>Upload</a
				>
				<a
					href="/lists"
					class="rounded-xl px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
					>Browse</a
				>
				<a
					href="/compare"
					class="rounded-xl px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
					>Compare</a
				>
			</div>
			<hr class="border-border-light dark:border-border-dark" />
			<div class="flex flex-col md:flex-row">
				<a
					href="login"
					class="rounded-xl px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
					>Login</a
				>
				<a
					href="register"
					class="rounded-xl px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
					>Register</a
				>
			</div>
		</div>
	</nav>
</header>

<main class="container mx-auto mb-20 flex h-full flex-grow flex-col px-4 lg:px-20">
	<slot />
</main>

<footer
	class="border-t-2 border-green-400 bg-[#dce0e8] text-center text-black dark:border-green-800 dark:bg-[#11111b] dark:text-white"
>
	<div class="px-4 py-5 text-center sm:container sm:mx-auto sm:flex sm:justify-between">
		<div class="space-y-2">
			<p class="font-bold text-green-600 dark:text-green-500">Load Order Library</p>
			<p>Created By <span class="text-blue-500">Phinocio</span></p>
		</div>
		<hr class="my-4 border-border-light dark:border-border-dark sm:hidden" />
		<div class="space-y-2">
			<p class="font-bold text-green-600 dark:text-green-500">Social</p>
			<p class="flex justify-center space-x-2">
				<a class="hover:text-blue-500" href="https://github.com/phinocio/loadorderlibrary"
					><GitHubIcon class="h-6 w-6" /></a
				><a class="hover:text-blue-500" href="https://discord.gg/K3KnEgrQE4"><DiscordIcon class="h-6 w-6" /></a>
			</p>
		</div>
		<hr class="my-4 border-border-light dark:border-border-dark sm:hidden" />
		<div class="space-y-2">
			<p class="font-bold text-green-600 dark:text-green-500">API Resources</p>
			<p class="flex justify-center space-x-2">
				<a class="hover:text-blue-500" href="https://docs.loadorderlibrary.com">Documentation</a>
			</p>
		</div>
		<hr class="my-4 border-border-light dark:border-border-dark sm:hidden" />
		<div class="space-y-2">
			<p class="font-bold text-green-600 dark:text-green-500">Support The Site</p>
			<p class="flex justify-center space-x-2">
				<a class="hover:text-blue-500" href="https://patreon.com/phinocio">Patreon</a><a
					class="hover:text-blue-500"
					href="https://ko-fi.com/phinocio">Ko-Fi</a
				>
			</p>
		</div>
	</div>
</footer>
