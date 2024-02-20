<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms';
	import UserIcon from '$lib/components/icons/User.svelte';
	import GameControllerIcon from '$lib/components/icons/GameController.svelte';
	import { uploadSchema, type UploadSchema } from '$lib/schemas';
	import type { PageData } from './$types';

	export let data: PageData;
	export let formData: SuperValidated<UploadSchema>;

	const { form, errors, enhance, constraints } = superForm(formData, {
		taintedMessage: null,
		validators: uploadSchema,
		validationMethod: 'auto',
	});
</script>

<svelte:head>
	<title>Upload - Load Order Library</title>
</svelte:head>

<h1 class="mb-4 text-3xl font-bold">Upload a List</h1>

<article class="grid grid-cols-2 gap-10">
	<section class="flex flex-col">
		<h2 class="text-3xl">List Info</h2>
		<form method="POST" class="mt-5 flex flex-col space-y-4" use:enhance>
			<section class="space-y-4">
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
						class="w-full rounded-full {$errors?.name
							? 'border border-red-500'
							: ''} bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#26263a]"
						placeholder="List Name..."
						autocomplete="name"
						required
						{...$constraints.name}
					/>
				</label>
				<label for="name" class="relative block">
					<UserIcon
						class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform {$errors?.name
							? 'text-red-500'
							: 'text-green-500'}"
					/>

					<input
						type="text"
						name="version"
						aria-invalid={$errors.version ? 'true' : undefined}
						id="version"
						bind:value={$form.version}
						class="w-full rounded-full {$errors?.version
							? 'border border-red-500'
							: ''} bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#26263a]"
						placeholder="Version (optional)..."
						required
						{...$constraints.version}
					/>
				</label>

				<label for="name" class="relative block">
					<GameControllerIcon
						class="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform {$errors?.name
							? 'text-red-500'
							: 'text-green-500'}"
					/>

					<select
						name="game"
						aria-invalid={$errors.game ? 'true' : undefined}
						id="game"
						bind:value={$form.game}
						class="w-full rounded-full {$errors?.game
							? 'border border-red-500'
							: ''} appearance-none bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#26263a]"
						placeholder="Version (optional)..."
						required
						{...$constraints.game}
					>
						<option value="">-- Choose Game -- </option>
						{#each data.games.data as game}
							<option value={game.id}>{game.name}</option>
						{/each}
					</select>
				</label>

				<label for="description" class="relative block">
					<textarea
						name="description"
						id="description"
						bind:value={$form.description}
						class="w-full rounded-xl bg-gray-200 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#26263a]"
						placeholder="Description..."
						{...$constraints.description}
					/>
				</label>
			</section>
		</form>
	</section>

	<section class="flex justify-end">
		<h2 class="text-3xl">Valid Files</h2>
	</section>
</article>
