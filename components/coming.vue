<script setup lang="ts">
import { LucideCircleAlert, LucideLoader2 } from '#components';

interface Props {
       title: string;
       subtitle?: string;
       description?: string;
}

withDefaults(defineProps<Props>(), {
       subtitle: 'dashboard template coming soon.',
       description: 'This page is currently under construction.',
});
</script>

<template>
       <div class="flex min-h-[85vh] items-center justify-center text-center">
              <div class="max-w-(--breakpoint-sm) space-y-4 lg:space-y-8">
                     <h1
                            class="flex items-center justify-center text-3xl font-semibold tracking-tight lg:text-4xl"
                     >
                            <LucideLoader2 class="mr-5 size-9 animate-spin" />
                            {{ title }}
                     </h1>

                     <div class="lg:text-lg">{{ subtitle }}</div>

                     <div class="text-muted-foreground flex items-center justify-center gap-2">
                            <LucideCircleAlert class="size-4 text-orange-400" />
                            {{ description }}
                     </div>
              </div>
       </div>
</template>
