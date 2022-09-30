import payload from "payload"

export async function loadPosts() {
    // Call an external API endpoint to get posts
    const site = await payload.findGlobal({
        slug: 'Site',
      })
  
    return {site}
}