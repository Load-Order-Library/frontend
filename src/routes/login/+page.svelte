<script lang="ts">
	import PasswordIcon from '$lib/components/icons/Password.svelte';
	import type { ActionData } from './$types';
	import UserIcon from '$lib/components/icons/User.svelte';
	import { page } from '$app/stores';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login - Load Order Library</title>
</svelte:head>

<div class=" flex flex-col items-center">
	<h1 class="text-3xl">Login</h1>
	<form method="POST" class="mt-5 flex flex-col space-y-4">
		{#if form?.errMessage}
			<p class="font-bold text-red-500">{form.errMessage}</p>
		{/if}
		{#if form?.missing}<p class="error">The name field is required</p>{/if}
		<div>
			<label for="name" class="relative block">
				<UserIcon
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
				/>
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
				><PasswordIcon
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
				/><input
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
			<a class="text-sm text-gray-400 underline hover:text-gray-600" href="/register">Not Registered?</a>
			<button
				type="submit"
				class="rounded-xl border border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
				>Login</button
			>
		</section>
	</form>
</div>
