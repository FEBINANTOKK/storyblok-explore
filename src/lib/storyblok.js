// // // src/lib/storyblok.js
// // src/lib/storyblok.js
// import { storyblokInit, apiPlugin } from "@storyblok/svelte";

// // Optional: Load your components mapping
// import Page from "$lib/components/Page.svelte";

// storyblokInit({
//   accessToken: import.meta.env.VITE_STORYBLOK_TOKEN, // or hardcoded temporarily
// use: [apiPlugin],
//   components: {
//     page: Page,
//   },
// });
// src/lib/storyblok.js
import { storyblokInit, apiPlugin } from "@storyblok/svelte";
import Page from "$lib/components/Page.svelte"; // Add all your storyblok components

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN, // or a hardcoded token for now
  use: [apiPlugin],
  components: {
    page: Page, // Register Storyblok components here
  },
});
