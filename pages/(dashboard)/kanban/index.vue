<script setup lang="ts">
import FormLayout from '@/components/layout/form-layout.vue';
import Coming from '~/components/coming.vue';

definePageMeta({
       path: '/dashboard/kanban',
});
</script>

<template>
       <FormLayout>
              <Coming
                     title="Kanban"
                     subtitle="Easily manage your projects and tasks with Kanban board. Organize your workflow and increase team productivity with drag-and-drop."
              />
       </FormLayout>
</template>
