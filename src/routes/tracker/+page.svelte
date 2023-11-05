<script>
    import LogCard from "./logCard.svelte";
    /** @type {import('./$types').PageData} */
	export let data;

    const logs = data.data
</script>

<h1>Tracker</h1>
<form method="POST" action="?/create">
    <select name="state" placeholder="Bulking">
        <option value="bulking">Bulking</option>
        <option value="shredding">Shredding</option>
        <option value="maintenance">Maintenance</option>
      </select>
    <input name="weight" placeholder="Weight" value=90/>
    <button action="submit">Log</button>
</form>

<LogCard {logs} />
