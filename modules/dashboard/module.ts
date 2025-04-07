import { defineNuxtModule } from '@nuxt/kit';
import { resolve } from 'pathe';

export default defineNuxtModule({
    meta: {
        name: 'dashboardmodule',
        configKey: 'dashboardModule',
    },
    setup(options: object, nuxt) {
        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'dashboard-overview',
                path: '/dashboard/overview',
                file: resolve(__dirname, 'pages/overview.vue'),
            });
            pages.push({
                name: 'dashboard-products',
                path: '/dashboard/product',
                file: resolve(__dirname, 'pages/products/product-list.vue'),
            });
            pages.push({
                name: 'dashboard-products-new',
                path: '/dashboard/product/new',
                file: resolve(__dirname, 'pages/products/product-new.vue'),
            });
            pages.push({
                name: 'dashboard-products-edit',
                path: '/dashboard/product/:id',
                file: resolve(__dirname, 'pages/products/product-edit.vue'),
            });
            pages.push({
                name: 'dashboard-orders',
                path: '/dashboard/order',
                file: resolve(__dirname, 'pages/orders/order-list.vue'),
            });
            pages.push({
                name: 'dashboard-orders-detail',
                path: '/dashboard/order/:id',
                file: resolve(__dirname, 'pages/orders/order-detail.vue'),
            });
            pages.push({
                name: 'dashboard-redirect',
                path: '/dashboard',
                redirect: '/dashboard/overview',
            });
        });
    },
});
