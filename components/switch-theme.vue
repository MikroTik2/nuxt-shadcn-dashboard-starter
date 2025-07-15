<script setup lang="ts">
import {
       DropdownMenu,
       DropdownMenuContent,
       DropdownMenuItem,
       DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@iconify/vue';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const colorMode = useColorMode();
</script>

<template>
       <DropdownMenu>
              <DropdownMenuTrigger as-child>
                     <div :class="cn(buttonVariants({ size: 'icon', variant: 'outline' }))">
                            <Icon
                                   icon="radix-icons:moon"
                                   class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            />
                            <Icon
                                   icon="radix-icons:sun"
                                   class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            />
                            <span class="sr-only">Toggle theme</span>
                     </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                     <DropdownMenuItem @click="colorMode.preference = 'light'">
                            Light
                     </DropdownMenuItem>
                     <DropdownMenuItem @click="colorMode.preference = 'dark'">
                            Dark
                     </DropdownMenuItem>
                     <DropdownMenuItem @click="colorMode.preference = 'system'">
                            System
                     </DropdownMenuItem>
              </DropdownMenuContent>
       </DropdownMenu>
</template>
