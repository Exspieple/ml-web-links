// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapidePlugin from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  site: "https://resources.merletz.de/",

  integrations: [
    starlight({
      title: "Useful resources",
      favicon: "favicon.ico",
      tagline: "A collection of useful resources for developers.",
      logo: {
        src: "./src/assets/LZK_logo.svg",
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/starlightVariables.css',
        './src/styles/themeModification.css',
      ],
      plugins: [starlightThemeRapidePlugin()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Exspieple/ml-web-links",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/merletz_/",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Schule",
          items: [{ autogenerate: { directory: "school" } }],
          badge: "DE",
        },
        {
          label: "Aviation",
          items: [{ autogenerate: { directory: "aviation" } }],
        },
      ],
    }),
  ],
});
