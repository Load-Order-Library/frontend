<script lang="ts">
	export let data;

	const { user } = data;
</script>

<h1 class="mb-4 text-3xl font-bold">Hello, {user.name}</h1>

<div class="grid grid-cols-2">
	<section>Your Lists</section>
	<section>Update Info</section>
</div>
