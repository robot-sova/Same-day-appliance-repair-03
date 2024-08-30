import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: "https://samedayappliance.repair",
  integrations: [tailwind(), mdx(), sitemap()],

  redirects: {
    'https://samedayappliance.repair/services/microwave-repair-los-angeles/services/induction-cooktop-repair': 'https://samedayappliance.repair/services/microwave-repair-los-angeles',
  },
});







