<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import PasswordIcon from '$lib/components/icons/Password.svelte';
	import UserIcon from '$lib/components/icons/User.svelte';
	import { registerSchema, type RegisterScheme } from '$lib/schemas';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let data: SuperValidated<RegisterScheme>;

	const { form, errors, enhance, constraints } = superForm(data, {
		taintedMessage: null,
		validators: registerSchema,
		validationMethod: 'auto',
	});
</script>

<SuperDebug data={$form} />

<article class="flex w-full flex-col items-center">
	<h1 class="text-3xl">Register</h1>
	<form method="POST" class="mt-5 flex flex-col space-y-4" use:enhance>
		<div>
			<label for="name" class="relative block">
				<UserIcon
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform {$errors?.name
						? 'text-red-500'
						: 'text-green-500'}"
				/>

				<input
					type="text"
					name="name"
					aria-invalid={$errors.name ? 'true' : undefined}
					id="name"
					bind:value={$form.name}
					class="block w-full rounded-full {$errors?.name
						? 'border border-red-500'
						: ''}  bg-gray-200 px-4 py-3 pl-14 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
					placeholder="Username..."
					autocomplete="name"
					required
					{...$constraints.name}
				/>
				<div
					data-lastpass-icon-root="true"
					style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
				></div></label
			>
			{#if $errors?.name}
				{#each $errors?.name as error}
					<p class="ml-4 text-sm text-red-500">{error}</p>
				{/each}
			{/if}
		</div>
		<div>
			<label for="password" class="relative block"
				><PasswordIcon
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform {$errors?.password
						? 'text-red-500'
						: 'text-green-500'}"
				/><input
					type="password"
					name="password"
					bind:value={$form.password}
					aria-invalid={$errors.password ? 'true' : undefined}
					id="password"
					class="block w-full rounded-full {$errors?.password
						? 'border border-red-500'
						: ''} bg-gray-200 px-4 py-3 pl-14 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
					placeholder="Password..."
					autocomplete="new-password"
					required
					{...$constraints.password}
				/>
				<div
					data-lastpass-icon-root="true"
					style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
				></div></label
			>
			{#if $errors?.password}
				{#each $errors.password as error}
					<p class="ml-4 text-sm text-red-500">{error}</p>
				{/each}
			{/if}
		</div>

		<div>
			<label for="password_confirmation" class="relative block"
				><PasswordIcon
					class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform {$errors?.password_confirmation
						? 'text-red-500'
						: 'text-green-500'}"
				/><input
					type="password"
					name="password_confirmation"
					bind:value={$form.password_confirmation}
					aria-invalid={$errors.password_confirmation ? 'true' : undefined}
					id="password_confirmation"
					class="block w-full rounded-full {$errors?.password_confirmation
						? 'border border-red-500'
						: ''} bg-gray-200 px-4 py-3 pl-14 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#11111b]"
					placeholder="Password Confirmation..."
					autocomplete="new-password"
					required
					{...$constraints.password_confirmation}
				/>
				<div
					data-lastpass-icon-root="true"
					style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
				></div></label
			>
			{#if $errors?.password_confirmation}
				{#each $errors.password_confirmation as error}
					<p class="ml-4 block text-sm text-red-500">{error}</p>
				{/each}
			{/if}
		</div>

		<section class="flex items-center justify-between">
			<a class="text-sm text-gray-400 underline hover:text-gray-600" href="/login">Already Registered?</a>
			<button
				type="submit"
				class="rounded-xl border border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
				>Register</button
			>
		</section>
	</form>
</article>
