import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";



// https://astro.build/config
export default defineConfig({
  site: "https://samedayappliance.repair",
  integrations: [tailwind(), mdx(), sitemap()],


  redirects: {
    '/services/microwave-repair-los-angeles/services/induction-cooktop-repair.astro': '/services/microwave-repair-los-angeles.astro'
  }

});







