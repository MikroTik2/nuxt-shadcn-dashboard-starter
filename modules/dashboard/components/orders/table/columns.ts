import type { ColumnDef } from '@tanstack/vue-table';
import { IconArrowUpDown } from '#components';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import OrderDropdownAction from './order-dropdown-action.vue';

interface Order {
    id: string;
    price: number;
    customer: string;
    email: string;
    date: string;
    status: string;
}

const statusTranslations: Record<string, string> = {
    pending: 'Pending',
    completed: 'Completed',
    shipped: 'Shipped',
    delivered: 'Delivered',
    canceled: 'Canceled',
};

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: 'id',
        header: '#',
        cell: ({ row }) => h('div', { class: 'text-muted-foreground' }, row.getValue('id')),
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
        accessorKey: 'customer',
        header: 'Customer',
        cell: ({ row }) => h('div', { class: 'truncate w-64' }, row.getValue('customer')),
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => h('div', { class: 'truncate w-64' }, row.getValue('email')),
    },
    {
        accessorKey: 'date',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Date', h(IconArrowUpDown, { class: '!ml-2 !h-4 !w-4' })]);
        },
        cell: ({ row }) => {
            const date = new Date(row.getValue('date'));
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }).format(date);

            return h('div', { class: 'truncate w-64' }, formattedDate);
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Status', h(IconArrowUpDown, { class: '!ml-2 !h-4 !w-4' })]);
        },
        cell: ({ row }) => {
            const status = row.getValue('status') as string;
            const translatedStatus = statusTranslations[status] || status;

            return h('div', { class: 'truncate w-64' }, h(Badge, { variant: 'outline' }, translatedStatus));
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return h(OrderDropdownAction, {
                payment,
                onExpand: row.toggleExpanded,
            });
        },
    },
];
