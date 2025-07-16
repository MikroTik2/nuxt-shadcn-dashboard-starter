<script setup lang="ts">
import FormLayout from '@/components/layout/form-layout.vue';
import ProfileForm from './components/profile-form.vue';

definePageMeta({
       path: '/dashboard/profile',
});
</script>

<template>
       <FormLayout>
              <ProfileForm />
       </FormLayout>
</template>
