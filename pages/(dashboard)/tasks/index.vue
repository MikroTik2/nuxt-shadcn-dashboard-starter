<script setup lang="ts">
import FormLayout from '~/components/layout/form-layout.vue';
import Table from './components/table.vue';

definePageMeta({
       path: '/dashboard/tasks',
});
</script>

<template>
       <FormLayout>
              <Table />
       </FormLayout>
</template>
