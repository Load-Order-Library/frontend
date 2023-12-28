<script lang="ts">
	import type { ActionData } from './$types';

	let name: string = '';
	let password: string = '';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login - Load Order Library</title>
</svelte:head>

<div class="justify-startp-5 flex flex-col items-center">
	<h1 class="text-3xl">Login</h1>
	<form method="POST" action="?/login" class="mt-5 flex flex-col space-y-4">
		{#if form?.resp}
			<p class="font-bold text-red-500">{form.resp.message}</p>
		{/if}
		{#if form?.missing}<p class="error">The name field is required</p>{/if}
		<div>
			<label for="name" class="relative block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					></path>
				</svg>
				<input
					type="text"
					name="name"
					id="name"
					value={form?.name ?? ''}
					class="block w-full rounded-full bg-gray-200 px-4 py-3 pl-14 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
					placeholder="Username..."
					autocomplete="name"
					required
				/>
				<div
					data-lastpass-icon-root="true"
					style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
				></div></label
			>
		</div>
		<div>
			<label for="password" class="relative block"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
					></path></svg
				><input
					type="password"
					name="password"
					id="password"
					class="block w-full rounded-full bg-gray-200 px-4 py-3 pl-14 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
					placeholder="Password..."
					autocomplete="current-password"
					required
				/>
				<div
					data-lastpass-icon-root="true"
					style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
				></div></label
			>
		</div>

		<label class="flex justify-end" for="remember">
			Remember Me <input class="mx-2 h-6 w-6" type="checkbox" name="remember" id="remember" />
		</label>

		<section class="flex items-center justify-between">
			<a class="text-sm text-gray-400 underline hover:text-gray-600" href="/register">Not Registered?</a><button
				type="submit"
				class="rounded-xl border border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
				>Login</button
			>
		</section>
	</form>
</div>
