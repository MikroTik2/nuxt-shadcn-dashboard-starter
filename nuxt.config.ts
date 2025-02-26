export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
        'nuxt-lucide-icons',
        'shadcn-nuxt',
        '~/modules/login',
        '~/modules/dashboard',
        '@nuxtjs/supabase',
    ],
    supabase: {
        redirect: false,
    },
    colorMode: {
        preference: 'system',
        storageKey: 'theme',
        classSuffix: '',
        fallback: 'null',
        dataValue: 'true',
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
    lucide: {
        namePrefix: 'Icon',
    },
    shadcn: {
        prefix: '',
        componentDir: './components/ui',
    },
    css: [
        '~/assets/styles/main.scss',
        '~/assets/styles/base.scss',
    ],
    eslint: {
        config: {
            stylistic: true,
        },
    },
});
