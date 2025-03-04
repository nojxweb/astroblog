import rss from '@astrojs/rss';
import { build } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("notes");
  return rss({
    title: 'Mon premier article de blog',
    description: "Il s'agit du premier article de mon nouveau blog Astro.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,/*  */
    })),
    customData: `<language>fr-fr</language>`,
  })
}