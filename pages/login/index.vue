<script setup lang="ts">
import { cn } from '@/lib/utils';
import { buttonVariants } from '~/components/ui/button';

import { GithubLogoIcon, StarFilledIcon } from '@radix-icons/vue';
import LoginForm from './components/login-form.vue';

definePageMeta({
       path: '/',
});

type GitHubResponse = {
       stargazers_count: number;
};

const { data } = useFetch<GitHubResponse>(
       'https://api.github.com/repos/MikroTik2/nuxt-shadcn-dashboard-starter'
);
</script>

<template>
       <div
              class="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0"
       >
              <div
                     class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
              >
                     <div class="absolute inset-0 bg-zinc-900" />
                     <div class="relative z-20 flex items-center text-lg font-medium">
                            <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   strokeWidth="2"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   class="mr-2 h-6 w-6"
                            >
                                   <path
                                          d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
                                   />
                            </svg>
                            Acme Inc
                     </div>
                     <div class="relative z-20 mt-auto">
                            <blockquote class="space-y-2">
                                   <p class="text-lg">
                                          &ldquo;This library has saved me countless hours of work
                                          and helped me deliver stunning designs to my clients
                                          faster than ever before.&rdquo;
                                   </p>
                                   <footer class="text-sm">Aboba</footer>
                            </blockquote>
                     </div>
              </div>
              <div class="lg:p-8">
                     <div
                            class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
                     >
                            <a
                                   :class="cn(buttonVariants({ variant: 'ghost' }))"
                                   class="group"
                                   href="https://github.com/MikroTik2/nuxt-shadcn-dashboard-starter"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   variant="ghost"
                            >
                                   <div class="flex items-center gap-1">
                                          <GithubLogoIcon
                                                 class="h-4 group-hover:text-yellow-300 w-4"
                                          />
                                          <span class="group-hover:text-yellow-200"
                                                 >Star on GitHub</span
                                          >
                                   </div>
                                   <div class="ml-1 flex items-center gap-1">
                                          <StarFilledIcon
                                                 class="text-muted-foreground group-hover:text-yellow-300"
                                          />
                                          <span class="group-hover:text-yellow-200">{{
                                                 data?.stargazers_count
                                          }}</span>
                                   </div>
                            </a>

                            <div class="flex flex-col space-y-2 text-center">
                                   <h1 class="text-2xl font-semibold tracking-tight">
                                          Create an account
                                   </h1>
                                   <p class="text-sm text-muted-foreground">
                                          Enter your email below to create your account
                                   </p>
                            </div>
                            <LoginForm />
                            <p class="px-8 !m-0 text-center text-sm text-muted-foreground">
                                   By clicking continue, you agree to our
                                   <a
                                          href="/terms"
                                          class="underline underline-offset-4 hover:text-primary"
                                   >
                                          Terms of Service
                                   </a>
                                   and
                                   <a
                                          href="/privacy"
                                          class="underline underline-offset-4 hover:text-primary"
                                   >
                                          Privacy Policy
                                   </a>
                                   .
                            </p>
                     </div>
              </div>
       </div>
</template>
