<script lang="ts">
	import { Diff2HtmlUI } from 'diff2html/lib/ui/js/diff2html-ui-slim.js';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { comparison } = data;

	onMount(() => {
		const targetElement = document.getElementById('destination-elem-id');
		const configuration = { drawFileList: true, matching: 'words', outputFormat: 'side-by-side' };

		const diff2htmlUi = new Diff2HtmlUI(targetElement, comparison.data.diffs.join(''), configuration);

		diff2htmlUi.draw();
	});
</script>

<svelte:head>
	<title>Comparison Results - Load Order Library</title>
	<!-- Stylesheet -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css"
		media="screen and (prefers-color-scheme: light)"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
		media="screen and (prefers-color-scheme: dark)"
	/>
	<!-- CSS -->
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css"
	/>

	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<!-- Javascripts -->
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html.min.js"></script>
</svelte:head>

<div id="destination-elem-id" />
aaaaa
