<!-- src/lib/components/Page.svelte
<script>
  export let blok;
</script>

<section class="p-4 bg-white rounded shadow">
  <h1 class="text-xl font-bold">{blok?.title}</h1>
  <p class="text-gray-600">{blok?.subtitle}</p>
</section> --><!-- src/lib/components/Page.svelte -->
<script>
  export let blok;

  // console.log("❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌");
  
  // console.log(blok);
  // console.log("❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌");
</script>

<section>
  <h1 class="text-3xl font-bold">{blok.name}</h1>
  <p class="text-gray-600">{blok.content.introduction}</p>
  <!-- <p>{blok.content.body.content[0].content[1].text}</p> -->

  <!-- Optional: loop nested blocks if needed -->
  <!-- {#if blok.body}
    {#each blok.body as nested}
     
    {/each}
  {/if} -->
  <h5>page</h5>
</section>
