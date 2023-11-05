<script>
    import LogCard from "./logCard.svelte";
    /** @type {import('./$types').PageData} */
	export let data;

    const logs = data.data
</script>

<h1>Tracker</h1>
<LogCard {logs} />
