// export async function load() {
//   const res = await fetch(
//     "https://api.storyblok.com/v2/cdn/stories/tours?token=nmzmx3I80DPyrfu1gWliigtt"
//   );

//   if (!res.ok) {
//     console.error("❌ Failed to fetch story");
//     return { story: null };
//   }

//   const data = await res.json();
//   return {
//     story: data.story,
//   };
// }

import Page from "../lib/components/Page.svelte";
import Home from "$lib/components/Home.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "EDW3UXLubxQzwAePqa8UEwtt",
    use: [apiPlugin],
    components: {
      page: Page,
      home: Home,
    },
  });
  let storyblokApi = await useStoryblokApi();

  return {
    storyblokApi: storyblokApi,
  };
}
