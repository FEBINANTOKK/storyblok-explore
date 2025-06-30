<script>
  export let blok;

  console.log("❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌");
  
  console.log(blok);
  console.log("❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌");
</script>

<section>
  <!-- <h1 class="text-3xl font-bold">{blok.name}</h1>
  <p class="text-gray-600">{blok.content.introduction}</p>
  <p>{blok.content.body.content[0].content[1].text}</p> -->

  <!-- Optional: loop nested blocks if needed -->
  <!-- {#if blok.body}
    {#each blok.body as nested}
     
    {/each}
  {/if} -->{#if blok}
  <div><h2>{blok.name}</h2></div>
  <h5 class="text-green-600 text-2xl">{blok.content.blocks[0].headline}</h5>
{:else}
  <p class="text-red-500">Story not found</p>
{/if}

  <h5>Home page</h5>
</section>