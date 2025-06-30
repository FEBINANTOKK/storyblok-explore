import { storyblokInit, apiPlugin } from "@storyblok/svelte";
import Page from "$lib/components/Page.svelte"; // Add all your storyblok components
import Home from "$lib/components/Home.svelte";
storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN, // or a hardcoded token for now
  use: [apiPlugin],
  components: {
    page: Page,
    home: Home, // Register Storyblok components here
  },
});
