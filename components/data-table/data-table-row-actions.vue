<script setup lang="ts">
import type { Row } from '@tanstack/vue-table';
import type { Task } from '~/pages/(dashboard)/tasks/data/schema';
import { computed } from 'vue';
import { labels } from '~/pages/(dashboard)/tasks/data/data';
import { taskSchema } from '~/pages/(dashboard)/tasks/data/schema';
import { DotsHorizontalIcon } from '@radix-icons/vue';
import { LucideCopy, LucideEdit2 } from '#components';

interface DataTableRowActionsProps {
       row: Row<Task>;
}
const props = defineProps<DataTableRowActionsProps>();

const task = computed(() => taskSchema.parse(props.row.original));
</script>

<template>
       <DropdownMenu>
              <DropdownMenuTrigger as-child>
                     <Button variant="ghost" class="h-8 w-8 flex p-0 data-[state=open]:bg-muted">
                            <DotsHorizontalIcon class="h-4 w-4" />
                            <span class="sr-only">Open menu</span>
                     </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" class="w-[160px]">
                     <DropdownMenuItem>
                            <LucideEdit2 />
                            Edit
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                            <LucideCopy />
                            Make a copy
                     </DropdownMenuItem>
                     <DropdownMenuSeparator />
                     <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                                   <DropdownMenuRadioGroup :value="task.label">
                                          <DropdownMenuRadioItem
                                                 v-for="label in labels"
                                                 :key="label.value"
                                                 :value="label.value"
                                          >
                                                 {{ label.label }}
                                          </DropdownMenuRadioItem>
                                   </DropdownMenuRadioGroup>
                            </DropdownMenuSubContent>
                     </DropdownMenuSub>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                     </DropdownMenuItem>
              </DropdownMenuContent>
       </DropdownMenu>
</template>
