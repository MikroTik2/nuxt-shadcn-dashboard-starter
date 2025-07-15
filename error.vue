<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
</script>

<template>
       <div class="flex h-[90vh] flex-col items-center justify-center px-4 text-center">
              <span
                     class="from-foreground bg-gradient-to-b to-transparent bg-clip-text text-[10rem] leading-none font-extrabold text-transparent"
              >
                     404
              </span>
              <h1 class="font-heading my-2 text-2xl font-semibold">Page not found</h1>
              <p>Sorry, we could not find the page you are looking for</p>

              <div
                     class="mt-5 flex flex-wrap items-center justify-center gap-3 gap-x-2 sm:flex-nowrap"
              >
                     <a href="/" :class="cn(buttonVariants({ size: 'lg' }))">
                            <LucideChevronLeft />
                            Back Home
                     </a>
              </div>
       </div>
</template>
