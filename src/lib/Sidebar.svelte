<script>
	import { responseStore, time, status, theme } from './store';
	let themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'garden',
		'forest',
		'lofi',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
	let selected;
	$: theme.set(selected);
	function handleClick() {
		responseStore.set({});
		time.set('');
		status.set('');
	}
	let history = [];
</script>

<div class="sidebar">
	<button class="btn btn-neutral" on:click={handleClick}>New Request</button>
	<input type="text" placeholder="Search" class="input input-bordered" />
	<div class="history">
		{#if history.length > 0}
			<h1>History</h1>
		{:else}
			<div>Nothing to show here</div>
		{/if}
	</div>
	<select bind:value={selected} class="select select-bordered w-full max-w-xs">
		{#each themes as t}
			<option value={t}>{t}</option>
		{/each}</select
	>
	<a class="btn gtbtn" href="https://github.com/riasatsk/nitrogen">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Github
	</a>
</div>

<style>
	.sidebar {
		height: 100vh;
		width: 20vw;
		display: flex;
		flex-direction: column;
		/* gap: 10px; */
	}
	button {
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 25px;
	}
	input {
		margin: 10px;
	}
	.history {
		padding: 10px;
	}
	select {
		margin: 10px;
		width: max-content;
	}
	/* For WebKit-based browsers */
	/* Track */
	::-webkit-scrollbar {
		width: 1px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888; /* Color of the scrollbar handle */
		border-radius: 5px; /* Rounded corners for the handle */
	}

	/* Track (background) on hover */
	::-webkit-scrollbar-track:hover {
		background: #ccc;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	/* Corner */
	::-webkit-scrollbar-corner {
		background: #f1f1f1;
	}
	.gtbtn{
		margin: 1rem;
		margin-top: 60vh;
		
	}
</style>
