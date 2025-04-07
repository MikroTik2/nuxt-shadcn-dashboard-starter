<script setup lang="ts">
import type { Column } from '@tanstack/vue-table';
import type { Component } from 'vue';
import { cn } from '@/lib/utils';
import { CheckIcon } from '@radix-icons/vue';
import { computed } from 'vue';

interface Order {
    id: string;
    price: number;
    customer: string;
    email: string;
    date: string;
    status: string;
};

interface DataTableFacetedFilter {
    column?: Column<Order>;
    title?: string;
    options: {
        label: string;
        value: string;
        icon?: Component;
    }[];
}

const props = defineProps<DataTableFacetedFilter>();

const facets = computed(() => props.column?.getFacetedUniqueValues());
const selectedValues = computed(() => new Set(props.column?.getFilterValue() as string[]));
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline" class="border-dashed">
                <IconPlusCircle class="h-4 w-4" />
                {{ title }}
                <template v-if="selectedValues.size > 0">
                    <Separator orientation="vertical" class="mx-2 h-4" />
                    <Badge
                        variant="secondary"
                        class="rounded-sm px-1 font-normal lg:hidden"
                    >
                        {{ selectedValues.size }}
                    </Badge>
                    <div class="hidden lg:flex space-x-1">
                        <Badge
                            v-if="selectedValues.size > 2"
                            variant="secondary"
                            class="rounded-sm px-1 font-normal"
                        >
                            {{ selectedValues.size }} selected
                        </Badge>

                        <template v-else>
                            <Badge
                                v-for="item in options
                                    .filter((option: any) => selectedValues.has(option.value))"
                                :key="item.value"
                                variant="secondary"
                                class="rounded-sm px-1 font-normal"
                            >
                                {{ item.label }}
                            </Badge>
                        </template>
                    </div>
                </template>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[200px] p-0" align="start">
            <Command
                :filter-function="(list: DataTableFacetedFilter['options'], term: any) => list.filter(i => i.label.toLowerCase()?.includes(term))"
            >
                <CommandInput :placeholder="title" />
                <CommandList>
                    <CommandEmpty>Nothing found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem
                            v-for="option in options"
                            :key="option.value"
                            :value="option"
                            @select="(e: any) => {
                                const isSelected = selectedValues.has(option.value)
                                if (isSelected) {
                                    selectedValues.delete(option.value)
                                }
                                else {
                                    selectedValues.add(option.value)
                                }
                                const filterValues = Array.from(selectedValues)
                                column?.setFilterValue(
                                    filterValues.length ? filterValues : undefined,
                                )
                            }"
                        >
                            <div
                                :class="cn(
                                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                    selectedValues.has(option.value)
                                        ? 'bg-primary text-primary-foreground'
                                        : 'opacity-50 [&_svg]:invisible',
                                )"
                            >
                                <CheckIcon class="h-4 w-4" />
                            </div>
                            <span>{{ option.label }}</span>
                            <span v-if="facets?.get(option.value)" class="ml-auto h-4 w-4 flex items-center justify-center text-xs font-mono">
                                {{ facets.get(option.value) }}
                            </span>
                        </CommandItem>
                    </CommandGroup>

                    <template v-if="selectedValues.size > 0">
                        <CommandSeparator />
                        <CommandGroup>
                            <CommandItem
                                :value="{ label: 'Reset filters' }"
                                class="justify-center text-center"
                                @select="column?.setFilterValue(undefined)"
                            >
                                Reset filters
                            </CommandItem>
                        </CommandGroup>
                    </template>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>
