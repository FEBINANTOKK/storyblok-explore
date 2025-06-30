import { useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').PageLoad} */
export async function load({}) {
  const storyblokApi = useStoryblokApi();

  try {
    const res = await storyblokApi.get(`cdn/stories/home`, {
      version: "draft",
      resolve_relations: "recommended_tours.tours",
    });
    console.log("kkkkkkkkk");

    console.log(JSON.stringify(res.data.story, null, 2));

    return {
      story: res.data.story,
    };
  } catch (error) {
    console.error("❌ Failed to fetch story for Home:", error);
    return {
      status: 404,
      error: new Error("Story not found for Home 2"),
    };
  }
}
