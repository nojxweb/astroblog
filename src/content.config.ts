// Importer le chargeur glob
import { glob } from "astro/loaders";
// Importer des utilitaires depuis `astro:content`
import { z, defineCollection } from "astro:content";
// Définir un chargeur (`loader`) et un schéma (`schema`) pour chaque collection
const notes = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/notes" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Exportez un seul objet `collections` pour enregistrer votre/vos collection(s)
export const collections = { notes };