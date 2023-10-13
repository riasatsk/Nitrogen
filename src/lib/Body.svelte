<script>
    import { reqBody } from "./store";
	let reqBodyN = '';
    $:reqBody.set(reqBodyN)
</script>

<textarea placeholder="JSON/Text" bind:value={reqBodyN} cols="60" rows="10" />

<style>
	textarea {
		margin-top: 20px;
		padding: 10px; /* Add padding inside the textarea */
		font-size: 16px; /* Set font size */
		font-family: Arial, sans-serif; /* Set font family */
		border: 1px solid #ccc; /* Add a border */
		border-radius: 5px; /* Round the corners */
		outline: none; /* Remove the outline */
		resize: none; /* Disable resizing */
		background-color: transparent;
		font-family: monospace;
	}

	/* Style the textarea when focused (clicked) */
	textarea:focus {
		border: 2px solid #007bff; /* Change the border color on focus */
	}
</style>
