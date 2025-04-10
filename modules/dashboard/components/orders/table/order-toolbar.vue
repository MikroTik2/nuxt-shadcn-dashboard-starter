<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';
import { Cross2Icon } from '@radix-icons/vue';
import { computed } from 'vue';
import DataTableFacetedFilter from './order-faceted-filter.vue';

interface Order {
    id: string;
    price: number;
    customer: string;
    email: string;
    date: string;
    status: string;
}

const props = defineProps<DataTableToolbarProps>();

const statuses = [
    { value: 'pending', label: 'New' },
    { value: 'completed', label: 'Completed' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
];

interface DataTableToolbarProps {
    table: Table<Order>;
}

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0);
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex flex-1 items-center space-x-2">
            <Input
                placeholder="Search email..."
                class="max-w-[384px] !border-accent dark:bg-zinc-900"
                :model-value="(table.getColumn('email')?.getFilterValue() as string) ?? ''"
                @input="table.getColumn('email')?.setFilterValue($event.target.value)"
            />
            <DataTableFacetedFilter
                v-if="table.getColumn('status')"
                :column="table.getColumn('status')"
                title="Status"
                :options="statuses"
            />

            <Button
                v-if="isFiltered"
                variant="outline"
                class="!bg-zinc-900 border-dashed hover:opacity-80"
                @click="table.resetColumnFilters()"
            >
                Reset
                <Cross2Icon class="ml-2 h-4 w-4" />
            </Button>
        </div>
    </div>
</template>
