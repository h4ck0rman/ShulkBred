<script>
    export let log;
    
    let edit = false;
    const toggleEdit = () => {
        edit = !edit;
    }

</script>

{#if edit}

    <div class="block">
        <div class=" flex justify-center m-3 rounded-full py-1/2 bg-pink-200">
            <form method="POST" action="?/edit" class="w-full rounded-full bg-pink-200 overflow-hidden flex justify-between">

                <select name="state" value="{log.state}" class="bg-pink-200 rounded-l-full px-3 outline-none py-1">
                    <option value="Bulking">Bulking</option>
                    <option value="Shredding">Shredding</option>
                    <option value="Maintenance">Maintenance</option>
                </select>
                <div class="flex">
                    <input name="weight" placeholder="{log.weight}" value="{log.weight}" class="bg-pink-200 border-b-2 py-1 px-6"/>
                    <input name="id" type="hidden" value={log.id}/> 
                    <div>
                        <button action="submit" class="mx-1 py-1 px-6 rounded-full hover:bg-green-400 hover:opacity-100">&#10004;</button>
                        <button on:click={toggleEdit} class="px-6 py-1 rounded-full hover:bg-pink-400">&#65794;</button>
                    </div>
                </div>
            </form>
            
        </div>
        
    </div>
    

{:else}
    <div class="container mx-auto flex justify-center m-1 border-b-2 border-pink-300">  
        <div class="px-6 container mx-auto bg-white flex justify-start">{log.state}</div>  
        <div class="px-6 ">{log.weight}</div>
        <div class="px-6">{log.recordedAt.getDate()}|{log.recordedAt.getMonth()}|{log.recordedAt.getFullYear()}</div>
        <button on:click={toggleEdit} class="mx-2 pl-6">&#128393;</button>
        <form method="POST" action="?/delete" class="mx-2 pr-6">
            <input name="id" type="hidden" value={log.id}/>
            <button class="text-black">&#128465</button>
        </form>
    </div>

{/if}