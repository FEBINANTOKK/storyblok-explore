import { useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const storyblokApi = useStoryblokApi();
  const slug = params.slug;

  try {
    const res = await storyblokApi.get(`cdn/stories/tours/${slug}`);
    // console.log(JSON.stringify(res.data.story, null, 2));

    return {
      story: res.data.story,
    };
  } catch (error) {
    console.error("❌ Failed to fetch story:", error);
    return {
      status: 404,
      error: new Error("Story not found"),
    };
  }
}
