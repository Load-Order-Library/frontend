<script lang="ts">
	let name: string = '';
	let password: string = '';
</script>

<form method="POST">
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
