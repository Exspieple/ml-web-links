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
      tagline: "A collection of useful resources for developers.",
      logo: {
        src: "./src/assets/LZK_logo.svg",
      },
      favicon: "favicon.ico",
      head: [
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "noindex, nofollow",
          }
        }
      ],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/starlightVariables.css",
        "./src/styles/themeModification.css",
      ],
      plugins: [starlightThemeRapidePlugin()],
      editLink: {
        baseUrl: "https://github.com/Exspieple/ml-web-links/edit/main",
      },
      lastUpdated: true,
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
          label: "Schule",
          items: [{ autogenerate: { directory: "schule" } }],
          collapsed: true,
          badge: "DE",
        },
        {
          label: "Aviation",
          items: [{ autogenerate: { directory: "aviation" } }],
          collapsed: true,
          badge: "EN",
        },
      ],
    }),
  ],
});
