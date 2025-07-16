<script setup lang="ts">
import { Toaster } from './components/ui/sonner';
import 'vue-sonner/style.css';

const colorMode = useColorMode();

const color = computed(() => (colorMode.value === 'dark' ? '#09090b' : '#ffffff'));

useHead({
       meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { key: 'theme-color', name: 'theme-color', content: color },
       ],
       link: [{ rel: 'icon', href: '/favicon.ico' }],
       htmlAttrs: {
              lang: 'en',
       },
});

const title = 'Nuxt Shadcn UI - Dashboard Template';
const description =
       'A dashboard created using Nuxt, Shadcn UI. Features a dark mode switch and is designed for high performance and efficient data handling.';

useSeoMeta({
       title,
       description,
       ogTitle: title,
       ogDescription: description,
       ogUrl: 'https://nuxt-shadcn-dashboard-starter.vercel.app',
       ogImage: 'https://nuxt-shadcn-dashboard-starter.vercel.app/social-card.png',
       twitterTitle: title,
       twitterDescription: description,
       twitterImage: 'https://nuxt-shadcn-dashboard-starter.vercel.app/social-card.png',
       twitterCard: 'summary_large_image',
});
</script>

<template>
       <div class="relative">
              <NuxtLayout>
                     <NuxtPage />
              </NuxtLayout>
       </div>

       <Toaster />
</template>
