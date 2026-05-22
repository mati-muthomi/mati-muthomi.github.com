// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({

 site: 'https://mati-muthomi.github.com.git',
 base: '/',
  vite: {
    plugins: [tailwindcss()],
  },

});
