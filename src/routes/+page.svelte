<script>
	import Sidebar from '../lib/Sidebar.svelte';
	import Request from '../lib/Request.svelte';
	import Response from '../lib/Response.svelte';
	import { theme } from '../lib/store';
</script>

<div class="main" data-theme={$theme}>
	<Sidebar />
	<div class="body">
		<Request />
		<Response/>
	</div>
</div>

<style>
	.main {
		display: flex;
	}
	.body {
		display: flex;
	}
</style>
