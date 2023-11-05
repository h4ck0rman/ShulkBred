<script>
	/** @type {import('./$types').PageData} */
	export let data;
    $: console.log(data)

    const logs = data.data
    console.log(logs)
</script>

<h1>ShulkBred</h1>
{#each logs.data as log}
    <p>{log.state} {log.weight} {log.date}</p>
{/each}
