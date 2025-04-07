<script setup lang="ts">
import { IconLayoutDashboard, IconPackageSearch, IconShoppingBag } from '#components';
import { useMagicKeys } from '@vueuse/core';

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
        icon: IconLayoutDashboard,
        value: 'dashboard-overview',
    },
    {
        title: 'Products',
        url: '/dashboard/overview/products',
        icon: IconShoppingBag,
        value: 'dashboard-products',
    },
    {
        title: 'Orders',
        url: '/dashboard/overview/orders',
        icon: IconPackageSearch,
        value: 'dashboard-orders',
    },
]);

const open = ref(false);

const { Meta_J, Ctrl_J } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey))
            e.preventDefault();
    },
});

watch([Meta_J, Ctrl_J], (v) => {
    if (v[0] || v[1])
        handleOpenChange();
});

function handleOpenChange() {
    open.value = !open.value;
}
</script>

<template>
    <div>
        <Button
            class="relative h-9 w-full justify-start rounded-[0.5rem] dark:hover:bg-zinc-900 dark:hover:border-zinc-800 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
            variant="outline"
            @click="open = true"
        >
            <IconSearch class="mr-2 h-4 w-4" />

            Search...

            <kbd
                class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
            >
                <span class="text-xs">⌘</span>J
            </kbd>
        </Button>

        <CommandDialog v-model:open="open">
            <CommandInput placeholder="Enter a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    <CommandItem
                        v-for="(element, i) in searchItems"
                        :key="i"
                        :value="element.title"
                    >
                        <component :is="element.icon" class="!h-4 me-2 !w-4" />
                        {{ element.title }}
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </CommandDialog>
    </div>
</template>
