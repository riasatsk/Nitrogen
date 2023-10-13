<script>
	import { responseStore, time, status } from './store';
	function getObjectSizeInBytes(obj) {
		// Convert the object to a JSON string
		const jsonString = JSON.stringify(obj);

		// Calculate the length of the JSON string in bytes
		const bytes = new TextEncoder().encode(jsonString).length;

		return bytes;
	}
</script>

<div class="main">
	<div class="head">
		<h3>Status: {$status}</h3>
		<h3>Size: {getObjectSizeInBytes($responseStore)} bytes</h3>
		<h3>Time: {$time} ms</h3>
	</div>
	<br />
	<h1>Response :</h1>

	<div class="response">
		<pre>
   {JSON.stringify($responseStore, null, 2)}
     </pre>
	</div>
</div>

<style>
	.main {
		width: 40vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.head {
		display: flex;
		gap: 1rem;
		padding-top: 25px;
	}
	.response {
		overflow: auto;
		margin-top: 25px;
		margin: 1rem;
	}
	pre {
		background-color:transparent;

		padding: 10px;
		/* border: 1px solid #ddd; */
		border-radius: 5px;
		font-size: 14px;
		white-space: pre-wrap;
		word-wrap: break-word;
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
</style>
