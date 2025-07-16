<script setup lang="ts">
import { columns } from '~/components/data-table/columns';
import tasks from '../data/tasks.json';
import DataTable from '~/components/data-table/data-table.vue';

definePageMeta({
       path: '/dashboard/tasks',
});
</script>

<template>
       <div class="w-full flex flex-col items-stretch gap-4">
              <div class="flex flex-wrap items-end justify-between gap-2">
                     <div>
                            <h2 class="text-2xl font-bold tracking-tight">Tasks</h2>
                            <p class="text-muted-foreground">
                                   Here&apos;s a list of your tasks for this month!
                            </p>
                     </div>
              </div>
              <DataTable :data="tasks.data" :columns="columns" />
       </div>
</template>
