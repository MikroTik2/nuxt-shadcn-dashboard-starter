import type { NuxtPage } from 'nuxt/schema';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
       compatibilityDate: '2025-05-15',
       devtools: { enabled: false },
       css: ['~/assets/css/globals.css'],

       ssr: false,

       vite: {
              plugins: [tailwindcss()],
       },

       shadcn: {
              prefix: '',
              componentDir: './components/ui',
       },

       colorMode: {
              classSuffix: '',
       },

       pages: {
              pattern: ['**/*.vue', '!**/components/**'],
       },

       components: [
              {
                     path: '~/components',
                     extensions: ['vue'],
              },
       ],
       hooks: {
              'pages:extend': function (pages) {
                     const pagesToRemove: NuxtPage[] = [];
                     pages.forEach((page) => {
                            if (page.path.includes('component')) pagesToRemove.push(page);
                     });

                     pagesToRemove.forEach((page: NuxtPage) => {
                            pages.splice(pages.indexOf(page), 1);
                     });
              },
       },

       modules: [
              'shadcn-nuxt',
              '@nuxt/eslint',
              '@nuxtjs/color-mode',
              'nuxt-lucide-icons',
              'nuxt-svgo',
       ],
});
