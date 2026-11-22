import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeMermaid from "rehype-mermaid";

export default defineConfig({
  site: "https://hunterthe.dev",
  integrations: [mdx(), sitemap()],
  image: {
    layout: "constrained",
  },
  markdown: {
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          // Build-time inline SVG; colours come from the site CSS for `svg[id^="mermaid-"]`, so it follows the theme.
          strategy: "inline-svg",
          // Renders with the installed Google Chrome, so no Playwright browser download is needed locally or in CI.
          launchOptions: { channel: "chrome" },
          // Mermaid measures labels in the same font the page uses, so they fit when the site's Inter renders them.
          css: import.meta.resolve("@fontsource-variable/inter/wght.css"),
          mermaidConfig: {
            theme: "base",
            fontFamily: '"Inter Variable", Inter, system-ui, sans-serif',
            // Neutral greys for anything the site CSS doesn't restyle, instead of Mermaid's pastels.
            themeVariables: {
              fontSize: "15px",
              primaryColor: "#f0f0ea",
              primaryBorderColor: "#5b6168",
              primaryTextColor: "#1b1d1f",
              secondaryColor: "#f0f0ea",
              tertiaryColor: "#f0f0ea",
              lineColor: "#5b6168",
              noteBkgColor: "#f0f0ea",
              noteBorderColor: "#5b6168",
            },
            flowchart: { curve: "basis", padding: 12 },
          },
        },
      ],
    ],
  },
});
