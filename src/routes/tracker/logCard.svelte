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
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        {/each}
    {/if}
  </table>