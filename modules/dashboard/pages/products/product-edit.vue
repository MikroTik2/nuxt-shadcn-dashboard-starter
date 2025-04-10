<script setup lang="ts">
import FormLayout from '../../components/form-layout.vue';
import ProductForm from '../../components/products/product-edit-form.vue';
import ScrollContainer from '../../components/scroll-container.vue';

useHead({
    title: 'Edit Product',
});
</script>

<template>
    <FormLayout>
        <ScrollContainer>
            <ProductForm />
        </ScrollContainer>
    </FormLayout>
</template>
