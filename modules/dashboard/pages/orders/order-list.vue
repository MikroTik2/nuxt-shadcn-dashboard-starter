<script setup lang="ts">
import FormLayout from '../../components/form-layout.vue';
import Heading from '../../components/heading.vue';
import { columns } from '../../components/orders/table/columns';
import OrderTable from '../../components/orders/table/order-table.vue';

useHead({
    title: 'Orders',
});

definePageMeta({
    isVisibleElement: false,
});

const data = [
    {
        id: 'ORD1001',
        price: 1200,
        customer: 'John Smith',
        email: 'john.smith@example.com',
        date: '2024-03-01',
        status: 'pending',
    },
    {
        id: 'ORD1002',
        price: 850,
        customer: 'Emily Johnson',
        email: 'emily.johnson@example.com',
        date: '2024-03-02',
        status: 'shipped',
    },
    {
        id: 'ORD1003',
        price: 500,
        customer: 'Michael Brown',
        email: 'michael.brown@example.com',
        date: '2024-03-03',
        status: 'canceled',
    },
    {
        id: 'ORD1004',
        price: 2300,
        customer: 'Sarah Davis',
        email: 'sarah.davis@example.com',
        date: '2024-03-04',
        status: 'delivered',
    },
    {
        id: 'ORD1005',
        price: 1750,
        customer: 'David Wilson',
        email: 'david.wilson@example.com',
        date: '2024-03-05',
        status: 'completed',
    },
    {
        id: 'ORD1006',
        price: 910,
        customer: 'Emma Martinez',
        email: 'emma.martinez@example.com',
        date: '2024-03-06',
        status: 'pending',
    },
    {
        id: 'ORD1007',
        price: 1440,
        customer: 'James Anderson',
        email: 'james.anderson@example.com',
        date: '2024-03-07',
        status: 'shipped',
    },
    {
        id: 'ORD1008',
        price: 760,
        customer: 'Olivia Taylor',
        email: 'olivia.taylor@example.com',
        date: '2024-03-08',
        status: 'pending',
    },
    {
        id: 'ORD1009',
        price: 1950,
        customer: 'Benjamin Thomas',
        email: 'benjamin.thomas@example.com',
        date: '2024-03-09',
        status: 'delivered',
    },
    {
        id: 'ORD1010',
        price: 1100,
        customer: 'Ava Moore',
        email: 'ava.moore@example.com',
        date: '2024-03-10',
        status: 'completed',
    },
    {
        id: 'ORD1005',
        price: 1750,
        customer: 'David Wilson',
        email: 'david.wilson@example.com',
        date: '2024-03-05',
        status: 'completed',
    },
    {
        id: 'ORD1006',
        price: 910,
        customer: 'Emma Martinez',
        email: 'emma.martinez@example.com',
        date: '2024-03-06',
        status: 'pending',
    },
    {
        id: 'ORD1007',
        price: 1440,
        customer: 'James Anderson',
        email: 'james.anderson@example.com',
        date: '2024-03-07',
        status: 'shipped',
    },
    {
        id: 'ORD1008',
        price: 760,
        customer: 'Olivia Taylor',
        email: 'olivia.taylor@example.com',
        date: '2024-03-08',
        status: 'pending',
    },
    {
        id: 'ORD1009',
        price: 1950,
        customer: 'Benjamin Thomas',
        email: 'benjamin.thomas@example.com',
        date: '2024-03-09',
        status: 'delivered',
    },
    {
        id: 'ORD1010',
        price: 1100,
        customer: 'Ava Moore',
        email: 'ava.moore@example.com',
        date: '2024-03-10',
        status: 'completed',
    },
];
</script>

<template>
    <FormLayout>
        <div class="flex flex-1 p-4 md:px-6">
            <div class="flex flex-1 flex-col space-y-4">
                <Heading
                    title="Orders"
                    description="Manage customer orders with server-side table features."
                />

                <Separator class="!ml-0 mt-3" />
                <OrderTable :data="data" :columns="columns" />
            </div>
        </div>
    </FormLayout>
</template>
