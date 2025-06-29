<!-- <script>
import {page} from '$app/stores'
const urldata=$page.params.slug
  console.log(urldata);
  
</script>

<h1 class="text-3xl font-bold text-blue-600">
  Tour Page for: {urldata}
</h1> -->

<!-- <script>
  export let data;
  const story = data.story;
</script>

{#if story}
  <h1 class="text-3xl font-bold">{story.name}</h1>
  <p class="mt-2">{story.content.description}</p>
{:else}
  <p>Story not found.</p>
{/if} -->
<!-- src/routes/tours/[slug]/+page.svelte -->
<script>
  import Page from '$lib/components/Page.svelte';
  export let data;
</script>
{#if data.story}
  <Page blok={data.story} />
{:else}
  <p class="text-red-500">Story not found</p>
{/if}

