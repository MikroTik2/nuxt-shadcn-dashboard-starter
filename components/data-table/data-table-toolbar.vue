<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';
import type { Task } from '~/pages/(dashboard)/tasks/data/schema';
import { computed } from 'vue';
import { priorities, statuses } from '~/pages/(dashboard)/tasks/data/data';
import TableFacetedFilter from './data-table-faceted-filter.vue';
import TableViewOptions from './data-table-view-options.vue';
import { Cross2Icon } from '@radix-icons/vue';

interface DataTableToolbarProps {
       table: Table<Task>;
}

const props = defineProps<DataTableToolbarProps>();

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0);
</script>

<template>
       <div class="flex items-center justify-between">
              <div class="flex flex-1 items-center space-x-2">
                     <Input
                            placeholder="Filter tasks..."
                            :model-value="
                                   (table.getColumn('title')?.getFilterValue() as string) ?? ''
                            "
                            class="h-8 w-[150px] lg:w-[250px]"
                            @input="table.getColumn('title')?.setFilterValue($event.target.value)"
                     />
                     <TableFacetedFilter
                            v-if="table.getColumn('status')"
                            :column="table.getColumn('status')"
                            title="Status"
                            :options="statuses"
                     />
                     <TableFacetedFilter
                            v-if="table.getColumn('priority')"
                            :column="table.getColumn('priority')"
                            title="Priority"
                            :options="priorities"
                     />

                     <Button
                            v-if="isFiltered"
                            variant="ghost"
                            class="h-8 px-2 lg:px-3"
                            @click="table.resetColumnFilters()"
                     >
                            Reset
                            <Cross2Icon class="ml-2 h-4 w-4" />
                     </Button>
              </div>
              <TableViewOptions :table="table" />
       </div>
</template>
