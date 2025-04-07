<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';

import FileUpload from '../../components/file-upload.vue';

const isLoading = ref<boolean>(false);
const files = ref<File[]>([]);

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

const productCreateFormSchema = toTypedSchema(z.object({
    name: z.string().min(3, { message: 'Product name must be at least 3 characters long' }),
    category: z.string().min(1, { message: 'Please select a category' }),
    price: z.number().positive({ message: 'Price must be greater than 0' }),
    stock: z.number().int().min(0, { message: 'Stock cannot be negative' }),
    description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
    images: z
        .any()
        .refine((files: File[]) => files?.length > 0, 'Required')
        .refine((files: File[]) => files?.reduce((total, file) => total + file.size, 0) <= MAX_FILE_SIZE, `Maximum file size is ${filterBytes(MAX_FILE_SIZE)}.`)
        .refine((files: File[]) => files?.length <= 3, 'Maximum number of images is 3.')
        .refine((files: File[]) => files?.every(file => ACCEPTED_IMAGE_TYPES.includes(file.type)), 'Images must be in .jpg, .jpeg, .png, and .webp format.'),
}));

const { handleSubmit, resetForm } = useForm({
    validationSchema: productCreateFormSchema,
    initialValues: {
        name: 'Handcrafted Fresh Fish',
        description: 'New plum Pizza with ergonomic design for experienced comfort',
        stock: 10,
        price: 250,
    },
});

const onSubmit = handleSubmit((values) => {
    try {
        console.warn(values);
    }
    catch { }
    finally {
        resetForm();
        isLoading.value = false;
    };
});
</script>

<template>
    <Card class="mx-auto dark:bg-zinc-950 w-full">
        <CardHeader>
            <CardTitle class="text-left text-2xl font-bold">
                Edit Product
            </CardTitle>
        </CardHeader>
        <CardContent>
            <form class="space-y-8" @submit.prevent="onSubmit()">
                <FormField v-slot="{ componentField }" name="images">
                    <FormItem>
                        <FormControl>
                            <FormLabel>Images</FormLabel>
                            <FileUpload
                                v-model:value="files"
                                accept="image/jpeg, image/png, image/webp"
                                :max-size="MAX_FILE_SIZE"
                                :max-files="3"
                                :multiple="true"
                                v-bind="componentField"
                                :disabled="isLoading"
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <div class="grid gap-6 grid-cols-1">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField v-slot="{ componentField }" name="name">
                            <FormItem>
                                <FormLabel>Product name</FormLabel>
                                <FormControl>
                                    <Input :disabled="isLoading" v-bind="componentField" placeholder="Enter product" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                        <FormField v-slot="{ componentField }" name="category">
                            <FormItem>
                                <FormLabel>Categories</FormLabel>
                                <Select v-bind="componentField" :disabled="isLoading">
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="electronics">
                                            Electronics
                                        </SelectItem>
                                        <SelectItem value="clothing">
                                            Clothing
                                        </SelectItem>
                                        <SelectItem value="books">
                                            Books
                                        </SelectItem>
                                        <SelectItem value="furniture">
                                            Furniture
                                        </SelectItem>
                                        <SelectItem value="sports">
                                            Sports
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        </FormField>

                        <FormField v-slot="{ componentField }" name="price">
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input type="number" :disabled="isLoading" v-bind="componentField" placeholder="Enter price" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                        <FormField v-slot="{ componentField }" name="stock">
                            <FormItem>
                                <FormLabel>Stock</FormLabel>
                                <FormControl>
                                    <Input type="number" v-bind="componentField" :disabled="isLoading" placeholder="Enter stock" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>

                    <FormField v-slot="{ componentField }" name="description">
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea :disabled="isLoading" v-bind="componentField" placeholder="Enter description" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>

                <Button>
                    Edit product
                </Button>
            </form>
        </CardContent>
    </Card>
</template>
