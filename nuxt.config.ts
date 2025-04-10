export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
        'nuxt-lucide-icons',
        'nuxt-vuefire',
        'shadcn-nuxt',
        '~/modules/login',
        '~/modules/dashboard',
    ],
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
    tailwindcss: {
        viewer: false,
    },
    vuefire: {
        auth: {
            enabled: true,
            sessionCookie: false,
        },
        config: {
            apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
            authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.VUE_APP_FIREBASE_APP_ID,
        },
    },
});
