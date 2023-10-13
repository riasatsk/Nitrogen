<script>
	import { responseStore, time, status } from './store';
	import Body from './Body.svelte';
	import Header from './Header.svelte';
	const httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
	let selected;
	let url = '';
	function handleClick() {
		const t = Date.now();
		fetch(url)
			.then((res) => {
				status.set(res.status);
				return res.json();
			})
			.then((data) => {
				time.set(Date.now() - t);
				responseStore.set(data);
			});
	}
	let activeTab = Body;
</script>

<div class="main">
	<div class="head">
		<select class="select select-bordered w-full max-w-xs" bind:value={selected}>
			{#each httpMethods as method}
				<option value={method}>{method}</option>
			{/each}
		</select>
		<input
			type="text"
			placeholder="Url"
			class="input input-bordered input-primary w-full max-w-xs"
			bind:value={url}
		/>
		<button class="btn btn-primary" on:click={handleClick}>Send</button>
	</div>
	<div class="tabs">
		<button
			class="tab tab-bordered {activeTab === Body ? 'tab-active' : ''}"
			on:click={() => (activeTab = Body)}>Body</button
		>
		<button
			class="tab tab-bordered {activeTab === Header ? 'tab-active' : ''} "
			on:click={() => (activeTab = Header)}>Headers</button
		>
	</div>
	<div class="field">
		<svelte:component this={activeTab} />
	</div>
</div>

<style>
	.main {
		width: 40vw;
		height: 100vh;
	}
	.head {
		padding-top: 25px;
		display: flex;
	}
	input {
		margin-left: 5px;
		margin-right: 5px;
	}
	select {
		width: fit-content;
	}
	.tabs {
		margin-top: 25px;
	}
</style>
