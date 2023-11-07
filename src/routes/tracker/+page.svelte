<script>
    import LogCard from "./logCard.svelte";
    /** @type {import('./$types').PageData} */
	export let data;

    const logs = data.data

    let sakuras = './sakuras.jpg'
</script>

<div class="relative">
    <img src={sakuras} alt="Sakuras Japanese Art Wallpaper"/>  
    <form method="POST" action="?/create" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 rounded-full bg-white overflow-hidden flex justify-between">
        <div>
        <select name="state" placeholder="Bulking" class="bg-white outline-none py-3 m-1">
            <option value="Bulking">Bulking</option>
            <option value="Shredding">Shredding</option>
            <option value="Maintenance">Maintenance</option>
        </select>
        
            <input name="weight" placeholder="Weight" class="border-b-2 py-3 m-1"/>
        </div>
        <button action="submit" class="py-3 px-6 m-1 rounded-full hover:bg-pink-400 opacity-70 hover:opacity-100">Enter</button>
        
        
    </form>
</div>




{#if logs != null}
    {#each logs as log}
        <LogCard {log} />  
    {/each}
{/if}