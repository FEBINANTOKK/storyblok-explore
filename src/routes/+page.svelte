<script>
  import Home from '$lib/components/Home.svelte';

  export let data;
  console.log("jjkjk");
  
  console.log(data.story);
  
</script>
<h6>ggggg</h6>
{#if data.story}
  <Home blok={data.story} />
{:else}
  <p class="text-red-500">Story not found</p>
{/if}
<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>