<script setup lang="ts">
import {
       LucideLayoutDashboard,
       LucidePackageSearch,
       LucideSearch,
       LucideShoppingBag,
} from '#components';
import { useMagicKeys } from '@vueuse/core';
import CommandDialog from './ui/command/CommandDialog.vue';
import CommandInput from './ui/command/CommandInput.vue';
import CommandSeparator from './ui/command/CommandSeparator.vue';
import CommandList from './ui/command/CommandList.vue';
import CommandEmpty from './ui/command/CommandEmpty.vue';
import CommandGroup from './ui/command/CommandGroup.vue';
import CommandItem from './ui/command/CommandItem.vue';

export interface ISearchItems {
       title: string;
       url: string;
       disabled?: boolean;
       external?: boolean;
       shortcut?: [string, string];
       icon?: Component;
       label?: string;
       description?: string;
       value?: string;
       isActive?: boolean;
       items?: ISearchItems[];
}

const searchItems = ref<ISearchItems[]>([
       {
              title: 'Dashboard',
              url: '/dashboard/overview',
              icon: LucideLayoutDashboard,
              value: 'dashboard-overview',
       },
       {
              title: 'Products',
              url: '/dashboard/overview/products',
              icon: LucidePackageSearch,
              value: 'dashboard-products',
       },
       {
              title: 'Orders',
              url: '/dashboard/overview/orders',
              icon: LucideShoppingBag,
              value: 'dashboard-orders',
       },
]);

const open = ref(false);

const { Meta_J, Ctrl_J } = useMagicKeys({
       passive: false,
       onEventFired(e) {
              if (e.key === 'j' && (e.metaKey || e.ctrlKey)) e.preventDefault();
       },
});

watch([Meta_J, Ctrl_J], (v) => {
       if (v[0] || v[1]) handleOpenChange();
});

function handleOpenChange() {
       open.value = !open.value;
}
</script>

<template>
       <div>
              <Button
                     class="relative h-9 w-full justify-start text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                     variant="outline"
                     @click="open = true"
              >
                     <LucideSearch class="mr-2 size-4" />

                     Search...

                     <kbd
                            class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded bg-zinc-50 dark:bg-zinc-800 border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
                     >
                            <span class="text-xs">⌘</span>J
                     </kbd>
              </Button>

              <CommandDialog v-model:open="open">
                     <CommandInput placeholder="Enter a command or search..." />
                     <CommandSeparator />
                     <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Navigation">
                                   <CommandItem
                                          v-for="(element, i) in searchItems"
                                          :key="i"
                                          :value="element.title"
                                          class="!py-1.5"
                                   >
                                          <component :is="element.icon" class="mr-2 size-4" />
                                          {{ element.title }}
                                   </CommandItem>
                            </CommandGroup>
                     </CommandList>
              </CommandDialog>
       </div>
</template>
