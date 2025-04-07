import type { ColumnDef } from '@tanstack/vue-table';
import { IconArrowUpDown, Skeleton } from '#components';
import { Button } from '~/components/ui/button';
import ProductDropdownAction from './product-dropdown-action.vue';

interface Product {
    id: string;
    name: string;
    image: string;
    category: string;
    price: number;
    description: string;
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Product', h(IconArrowUpDown, { class: '!ml-2 !h-4 !w-4' })]);
        },
        cell: ({ row }) => h('div', { class: 'flex items-center gap-2' }, [
            h(Skeleton, { class: 'w-20 h-20 border rounded-2xl border-border object-cover' }),
            h('span', row.getValue('name')),
        ]),
    },
    {
        accessorKey: 'category',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Category', h(IconArrowUpDown, { class: '!ml-2 !h-4 !w-4' })]);
        },
        cell: ({ row }) => h('div', row.getValue('category')),
    },
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Price', h(IconArrowUpDown, { class: '!ml-2 !h-4 !w-4' })]);
        },
        cell: ({ row }) => {
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(row.getValue('price'));
            return h('div', { class: 'text-left font-medium' }, formatted);
        },
    },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: ({ row }) => h('div', { class: 'truncate w-64' }, row.getValue('description')),
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return h(ProductDropdownAction, {
                payment,
                onExpand: row.toggleExpanded,
            });
        },
    },
];
