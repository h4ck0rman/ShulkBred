<script>
    export let logs;
    const logs2 = logs;
</script>

<table >
    <tr>
      <th>State</th>
      <th>Weight</th>  
      <th>Date</th>
      <th>Actions</th>
    </tr>
    {#if logs2 != null}
        {#each logs2 as log}
            <tr>
                <td>{log.state}</td>
                <td>{log.weight}</td>
                <td>{log.recordedAt.getDate()} {log.recordedAt.getMonth()} {log.recordedAt.getYear()}</td>
                <td>
                    <form method="POST" action="?/edit">
                        <input name="id" type="hidden" value={log.id}/>
                        <button>Edit</button>
                    </form>
                    <form method="POST" action="?/delete">
                        <input name="id" type="hidden" value={log.id}/>
                        <button>Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    {/if}
  </table>