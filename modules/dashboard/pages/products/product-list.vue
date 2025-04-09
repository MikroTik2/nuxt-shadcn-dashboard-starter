<script setup lang="ts">
import FormLayout from '../../components/form-layout.vue';
import Heading from '../../components/heading.vue';
import { columns } from '../../components/products/table/columns';
import ProductTable from '../../components/products/table/product-table.vue';

useHead({
    title: 'Product',
});

definePageMeta({
    isVisibleElement: false,
});

interface Product {
    id: string;
    name: string;
    image: string;
    category: string;
    price: number;
    description: string;
}

const data: Product[] = [
    {
        id: '1',
        name: 'ASUS Laptop',
        image: '/images/laptop.jpg',
        category: 'Electronics',
        price: 25000,
        description: 'A powerful laptop for work and gaming.',
    },
    {
        id: '2',
        name: 'Samsung Smartphone',
        image: '/images/phone.jpg',
        category: 'Mobile Phones',
        price: 18000,
        description: 'A flagship smartphone with an excellent camera.',
    },
    {
        id: '3',
        name: 'Apple iPhone 13',
        image: '/images/iphone.jpg',
        category: 'Mobile Phones',
        price: 30000,
        description: 'The latest iPhone with exceptional performance.',
    },
    {
        id: '4',
        name: 'Lenovo ThinkPad',
        image: '/images/laptop2.jpg',
        category: 'Electronics',
        price: 22000,
        description: 'Reliable business laptop with high-end features.',
    },
    {
        id: '5',
        name: 'Sony TV',
        image: '/images/sony_tv.jpg',
        category: 'Televisions',
        price: 15000,
        description: 'High-definition smart TV with great picture quality.',
    },
    {
        id: '6',
        name: 'Bose Headphones',
        image: '/images/headphones.jpg',
        category: 'Audio Equipment',
        price: 7000,
        description: 'Noise-canceling headphones with superior sound.',
    },
    {
        id: '7',
        name: 'Samsung Refrigerator',
        image: '/images/fridge.jpg',
        category: 'Home Appliances',
        price: 12000,
        description: 'Spacious fridge with energy-efficient features.',
    },
    {
        id: '8',
        name: 'Xiaomi Mi Smartwatch',
        image: '/images/smartwatch.jpg',
        category: 'Accessories',
        price: 4000,
        description: 'Affordable smartwatch with fitness tracking.',
    },
    {
        id: '9',
        name: 'HP Envy Laptop',
        image: '/images/laptop3.jpg',
        category: 'Electronics',
        price: 27000,
        description: 'Stylish and powerful laptop for work and leisure.',
    },
    {
        id: '10',
        name: 'Nintendo Switch',
        image: '/images/switch.jpg',
        category: 'Gaming Consoles',
        price: 12000,
        description: 'Portable gaming console with exclusive games.',
    },
    {
        id: '11',
        name: 'Apple MacBook Pro',
        image: '/images/macbook.jpg',
        category: 'Electronics',
        price: 50000,
        description: 'Professional laptop with stunning performance.',
    },
    {
        id: '12',
        name: 'LG OLED TV',
        image: '/images/lg_oled.jpg',
        category: 'Televisions',
        price: 40000,
        description: 'Exceptional OLED display with ultra-thin design.',
    },
    {
        id: '13',
        name: 'Sony PlayStation 5',
        image: '/images/ps5.jpg',
        category: 'Gaming Consoles',
        price: 15000,
        description: 'Next-gen gaming console with cutting-edge features.',
    },
    {
        id: '14',
        name: 'Dell XPS 13',
        image: '/images/dell_xps.jpg',
        category: 'Electronics',
        price: 30000,
        description: 'Premium ultrabook with excellent battery life.',
    },
    {
        id: '15',
        name: 'Oculus Quest 2',
        image: '/images/oculus.jpg',
        category: 'Gaming Consoles',
        price: 8000,
        description: 'Virtual reality headset for an immersive experience.',
    },
];
</script>

<template>
    <FormLayout>
        <div class="flex flex-1 p-4 md:px-6">
            <div class="flex flex-1 flex-col space-y-4">
                <Heading
                    title="Products"
                    description="Manage your products (server table features)."
                    label="Add New"
                    href="/dashboard/product/new"
                />

                <Separator class="!ml-0 mt-3" />
                <ProductTable :data="data" :columns="columns" />
            </div>
        </div>
    </FormLayout>
</template>
