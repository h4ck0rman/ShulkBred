<script>
    export let log;
    
    let edit = false;
    const toggleEdit = () => {
        edit = !edit;
    }

</script>

{#if edit}
    <div>
        <form method="POST" action="?/edit">
            <select name="state" placeholder={log.state}>
                <option value="Bulking">Bulking</option>
                <option value="Shredding">Shredding</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            <input name="weight" placeholder="Weight" value={log.weight}/>
            <input name="id" type="hidden" value={log.id}/>
            <button action="submit">&#111;</button>
        </form>
        <button on:click={toggleEdit}>&#120;</button>
    </div>
    

{:else}

    {log.state}
    {log.weight}
    {log.recordedAt}
    <button on:click={toggleEdit}>&#128393;</button>
    <form method="POST" action="?/delete">
        <input name="id" type="hidden" value={log.id}/>
        <button>&#128465</button>
    </form>
        

{/if}