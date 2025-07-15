<script setup lang="ts">
import type { Table } from '@tanstack/vue-table';
import type { Task } from '~/pages/(dashboard)/tasks/data/schema';
import { MixerHorizontalIcon } from '@radix-icons/vue';

interface DataTableViewOptionsProps {
       table: Table<Task>;
}

defineProps<DataTableViewOptionsProps>();
</script>

<template>
       <DropdownMenu>
              <DropdownMenuTrigger as-child>
                     <Button variant="outline" size="sm" class="ml-auto hidden h-8 lg:flex">
                            <MixerHorizontalIcon class="mr-2 h-4 w-4" />
                            View
                     </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" class="w-[150px]">
                     <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                     <DropdownMenuSeparator />

                     <DropdownMenuCheckboxItem
                            v-for="column in table
                                   .getAllColumns()
                                   .filter((column) => column.getCanHide())"
                            :key="column.id"
                            class="capitalize"
                            :model-value="column.getIsVisible()"
                            @update:model-value="
                                   (value) => {
                                          column.toggleVisibility(!!value);
                                   }
                            "
                     >
                            {{ column.id }}
                     </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
       </DropdownMenu>
</template>
