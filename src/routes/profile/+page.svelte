<script lang="ts">
	import EmailIcon from '$lib/components/icons/Email.svelte';
	import PasswordIcon from '$lib/components/icons/Password.svelte';
	import BrowseList from '$lib/components/lists/BrowseList.svelte';

	export let data;
	export let form;

	const { user, lists } = data;
</script>

<svelte:head>
	<title>Profile - Load Order Library</title>
</svelte:head>

<h1 class="mb-4 text-3xl font-bold">Hello, {user.name}</h1>

<div class="grid gap-10 md:grid-cols-3">
	<article class="col-span-2">
		<h2 class="mb-4 text-2xl font-bold">Your Lists</h2>

		{#if lists.data.length > 0}
			<section class="grid grid-cols-1 gap-10 md:grid-cols-2">
				{#each lists.data as list}
					<BrowseList {list} />
				{/each}
			</section>
		{:else}
			<p>
				You have no lists, why not <a
					href="/upload"
					class="text-blue-600 hover:text-blue-400 active:text-blue-400 dark:text-blue-400 dark:hover:text-blue-600 dark:active:text-blue-600"
				>
					create one?
				</a>
			</p>
		{/if}
	</article>
	<article class="col-span-2 md:col-span-1">
		<h2 class="mb-4 text-2xl font-bold">Manage Account</h2>

		<section>
			<h2 class="text-xl font-bold">Update Email</h2>
			<span class="text-gray-500">To remove the email, submit with the field blank.</span>
			<form method="post" action="?/updateEmail" class="mt-5 flex flex-col space-y-4">
				<label for="email" class="relative -z-10 block"
					><EmailIcon
						class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
					/><input
						type="email"
						name="email"
						id="email"
						class="w-full rounded-full bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
						placeholder="New Email"
						value={form?.email ?? user.email}
						autocomplete="email"
					/></label
				>
				<section class="flex items-center justify-end">
					<button
						type="submit"
						class="rounded-full border-2 border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
						>Update Email</button
					>
				</section>
			</form>
		</section>

		<section>
			<h2 class="text-xl font-bold">Update Password</h2>
			<form method="post" action="/profile" class="mt-5 flex flex-col space-y-4">
				<label for="current_password" class="relative -z-10 block">
					<PasswordIcon
						class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
					/>
					<input
						type="password"
						name="current_password"
						id="current_password"
						class="w-full rounded-full bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
						placeholder="Current Password..."
						required
						autocomplete="current-password"
					/>
				</label><label for="password" class="relative -z-10 block"
					><PasswordIcon
						class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
					/>
					<input
						type="password"
						name="password"
						id="password"
						class="w-full rounded-full bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
						placeholder="New Password..."
						required
						autocomplete="new-password"
					/>
				</label>
				<label for="password-confirm" class="relative -z-10 block"
					><PasswordIcon
						class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-green-500"
					/><input
						type="password"
						name="password-confirm"
						id="password-confirm"
						class="w-full rounded-full bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
						placeholder="Password Confirm..."
						required
						autocomplete="new-password"
					/>
				</label>
				<section class="flex items-center justify-end">
					<button
						type="submit"
						class="rounded-full border-2 border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
						>Update Password</button
					>
				</section>
			</form>
		</section>
	</article>
</div>
