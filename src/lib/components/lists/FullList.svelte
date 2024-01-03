<script lang="ts">
	import type { List } from '$lib/types/List';
	import LinkIcon from '$lib/components/icons/Link.svelte';
	import { page } from '$app/stores';
	import { formatDistanceToNow, format } from 'date-fns';
	import ExternalIcon from '../icons/External.svelte';

	export let list: List;
</script>

<article class="space-y-4">
	<section class="space-y-4">
		<header class="flex justify-between">
			<section class="b flex max-w-40 flex-col md:max-w-80">
				<h1 class="font-bold">
					<a class="text-xl text-green-600 hover:text-green-500 md:text-3xl" href="/lists/test-list"
						>{list.name}</a
					>
				</h1>
				<p class="font-bold">{list.version ? 'v' + list.version : ''}</p>
				<p class="mb-2">
					by <a
						class=" text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						href={list.author?.name ? '/lists?author=' + list.author.name : '/lists'}
						>Anonymous
					</a>
				</p>
				{#if list.website}
					<a
						href={list.website}
						class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						rel="noreferrer noopener"
						target="_blank"
						>Website <ExternalIcon class="inline h-6 w-6 pl-2" />
					</a>
				{/if}

				{#if list.readme}
					<a
						href={list.readme}
						class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						rel="noreferrer noopener"
						target="_blank"
						>Readme <ExternalIcon class="inline h-6 w-6 pl-2" />
					</a>
				{/if}

				{#if list.discord}
					<a
						href={list.discord}
						class="flex items-center text-green-600 hover:text-green-500 active:text-green-500 dark:text-green-500 dark:hover:text-green-600 dark:active:text-green-600"
						rel="noreferrer noopener"
						target="_blank"
						>{list.discord}<ExternalIcon class="inline h-6 w-6 pl-2" />
					</a>
				{/if}
			</section>
			<section class="flex flex-col items-end">
				<a class="ml-2 font-bold text-blue-500 hover:text-blue-600" href="/lists?game={list.game.name}"
					>{list.game.name}</a
				><em class="font-light">{list.private ? 'Private List' : ''}</em>
				<p
					title={format(new Date(list.created), 'PPpp')}
					class="flex text-sm text-slate-500 dark:text-slate-500"
				>
					Created{' '}
					{formatDistanceToNow(new Date(list.created), {
						addSuffix: true,
					})}
				</p>
				<p
					title={format(new Date(list.updated), 'PPpp')}
					class="flex text-sm text-slate-500 dark:text-slate-500"
				>
					Updated
					{formatDistanceToNow(new Date(list.updated), {
						addSuffix: true,
					})}
				</p>
				{#if list.expires}
					<p
						title={format(new Date(list.expires), 'PPpp')}
						class="flex text-sm text-slate-500 dark:text-slate-500"
					>
						Expires
						{formatDistanceToNow(new Date(list.expires), {
							addSuffix: true,
						})}
					</p>
				{/if}
			</section>
		</header>
		<p class="border-y border-border-light py-6 leading-10 md:text-xl md:leading-10 dark:border-border-dark">
			{list.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt corrupti maxime!
			Quidem, eligendi. Voluptatum expedita molestiae quos optio ratione soluta amet veritatis suscipit, accusantium
			architecto! Sunt quaerat eveniet excepturi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis
			voluptatum optio dignissimos quae repudiandae facilis unde placeat, expedita, alias eveniet quibusdam incidunt
			accusamus at, quos dolor cupiditate neque suscipit! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
			Minus, delectus. Temporibus odio esse eius accusamus mollitia saepe hic dolorum ducimus vero ipsam, tempore fugit
			necessitatibus distinctio ut. Eos, perferendis accusamus.
		</p>
	</section>

	<section>files</section>
</article>
