import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Mon premier article de blog',
    description: "Il s'agit du premier article de mon nouveau blog Astro.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr-fr</language>`,
  });
}