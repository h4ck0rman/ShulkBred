<script>
    import LogCard from "./logCard.svelte";
    /** @type {import('./$types').PageData} */
	export let data;

    const logs = data.data

    let sakuras = './sakuras.jpg'
</script>

<div class="relative h-1/2 w-auto overflow-hidden">
    <img src={sakuras} alt="Sakuras Japanese Art Wallpaper" class="object-contain"/>  
    <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-6xl text-white opacity-80">Track Your Weight</h1>

</div>
<div class="container mx-auto flex justify-center m-5 px-8">
    <form method="POST" action="?/create" class="w-3/4 outline outline-pink-300 rounded-full bg-white overflow-hidden flex justify-between">
        <div class="flex justify-left">
            <select name="state" placeholder="Bulking" class="bg-pink-300 rounded-l-full px-3 outline-none py-1">
                <option value="Bulking">Bulking</option>
                <option value="Shredding">Shredding</option>
                <option value="Maintenance">Maintenance</option>
            </select>
            <input name="weight" placeholder="Weight" class="border-b-2 py-1 px-6"/>
        </div>  
        <button action="submit" class="py-1 px-6 rounded-r-full hover:bg-pink-300 hover:opacity-100">Enter</button>
    </form>
</div>


<div class="container mx-auto flex justify-center m-1 bg-pink-300 border-b-2 border-pink-300">  
    <div class=" px-6 container mx-auto flex justify-start font-bold">State</div>  
    <div class="px-6 font-bold">Weight</div>
    <div class="px-6 font-bold">Date</div>
    <div class="mx-2 px-6 font-bold">Actions</div>
</div>

{#if logs != null}
    {#each logs as log}
        <LogCard {log} />  
    {/each}
{/if}