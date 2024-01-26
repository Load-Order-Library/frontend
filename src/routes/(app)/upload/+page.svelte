<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms';
	import UserIcon from '$lib/components/icons/User.svelte';
	import { uploadSchema, type UploadSchema } from '$lib/schemas';

	export let data: SuperValidated<UploadSchema>;

	const { form, errors, enhance, constraints } = superForm(data, {
		taintedMessage: null,
		validators: uploadSchema,
		validationMethod: 'auto',
	});
</script>

<h1 class="text-3xl font-bold">Upload a List</h1>

<section class="flex w-full flex-col items-center">
	<h2 class="text-3xl">List Info</h2>
	<form class="mt-5 flex flex-col space-y-4" use:enhance>
		<section>
			<label>
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
				<span>Version (optional)</span>
				<input
					type="text"
					class=" rounded-full bg-gray-200 px-4 py-3 pl-14 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-[#26263a]"
				/>
			</label>
		</section>

		<label>
			<span>Game</span>
			<select>
				<option value="1">TESV Skyrim SE</option>
				<option value="2">TESV Skyrim LE</option>
			</select>
			<label>
				<span>Description</span>
				<textarea />
			</label>
		</label>
	</form>
</section>
