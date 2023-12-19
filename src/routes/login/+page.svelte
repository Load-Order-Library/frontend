<script lang="ts">
	import type { PageData, ActionData } from './$types';

	let name: string = '';
	let password: string = '';

	export let data: PageData;
	export let form: ActionData;
</script>

<form method="POST" action="?/login">
	{#if form?.errors}
		{#each form.errors as error}
			<p class="text-red-500">{error.message}</p>
		{/each}
	{/if}
	{#if form?.missing}<p class="error">The email field is required</p>{/if}
	{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
	<div>
		<label for="name">Username</label>
		<input type="text" name="name" id="name" bind:value={name} required autocomplete="name" />
	</div>

	<div>
		<label for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			bind:value={password}
			required
			autocomplete="current-password"
		/>
	</div>

	<button type="submit">Login</button>
</form>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back, {data.user.name}</p>
{/if}
