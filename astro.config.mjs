import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";



export default defineConfig({
  site: "https://samedayappliance.repair",
  integrations: [tailwind(), mdx(), sitemap()],
  outDir: "./dist", // Ensures the build output is in the 'dist' folder

});






