<script lang="ts">
    import { page } from '$app/stores';
    let count = 0;
    function Counter(): void{
        count+=1;
    }
</script>
<div class="flex justify-center direction-column flex-col items-center">
    <h1>{$page.status} {$page.error?.message}</h1>
     
    <button type="button" on:click={Counter}
    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        {#if count==0}ok{:else}{count}{/if}
    </button>
</div>


<style lang="postcss">
</style>
