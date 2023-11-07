<script>
    import LogCard from "./logCard.svelte";
    /** @type {import('./$types').PageData} */
	export let data;

    const logs = data.data
</script>

<h1>Tracker</h1>
<div>
    <form method="POST" action="?/create">
        <select name="state" placeholder="Bulking">
            <option value="Bulking">Bulking</option>
            <option value="Shredding">Shredding</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        <input name="weight" placeholder="Weight" value=90/>
        <button action="submit">
            Log
        </button>
    </form>
</div>


{#if logs != null}
    {#each logs as log}
        <LogCard {log} />  
    {/each}
{/if}