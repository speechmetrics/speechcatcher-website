// @ts-check

/// <reference types="vite/client" />

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: import.meta.env.PROD
        ? { "react-dom/server": "react-dom/server.edge" }
        : undefined,
    },
  },
  output: "server",
  integrations: [
    react(),
    starlight({
      title: "SpeechCatcher Documentation",
      description: "Documentation for SpeechCatcher.",
      customCss: ["./src/styles/custom.css"],
      components: {
        SiteTitle: "./src/components/overrides/SiteTitle.astro",
      },
      sidebar: [
        "docs",
        {
          label: "Guides",
          autogenerate: { directory: "docs/guides" },
        },
      ],
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
