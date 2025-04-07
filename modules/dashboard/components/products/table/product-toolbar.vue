<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';
import { Cross2Icon } from '@radix-icons/vue';
import { computed } from 'vue';
import ProductFacetedFilter from './product-faceted-filter.vue';

interface Product {
    id: string;
    name: string;
    image: string;
    category: string;
    price: number;
    description: string;
}

const props = defineProps<DataTableToolbarProps>();

const categories = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Mobile Phones', label: 'Mobile Phones' },
    { value: 'Laptops', label: 'Laptops' },
    { value: 'Accessories', label: 'Accessories' },
    { value: 'Home Appliances', label: 'Home Appliances' },
    { value: 'Televisions', label: 'Televisions' },
    { value: 'Audio Equipment', label: 'Audio Equipment' },
    { value: 'Gaming Consoles', label: 'Gaming Consoles' },
];

interface DataTableToolbarProps {
    table: Table<Product>;
}

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0);
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex flex-1 items-center space-x-2">
            <Input
                placeholder="Search name..."
                :model-value="(table.getColumn('name')?.getFilterValue() as string) ?? ''"
                class="max-w-[384px]"
                @input="table.getColumn('name')?.setFilterValue($event.target.value)"
            />
            <ProductFacetedFilter
                v-if="table.getColumn('category')"
                :column="table.getColumn('category')"
                title="Categories"
                :options="categories"
            />

            <Button
                v-if="isFiltered"
                variant="outline"
                @click="table.resetColumnFilters()"
            >
                Reset
                <Cross2Icon class="ml-2 h-4 w-4" />
            </Button>
        </div>
    </div>
</template>
