<script setup lang="ts">
import { cn } from '@/lib/utils';
import { buttonVariants } from '~/components/ui/button';
import FormLayout from '../../components/form-layout.vue';
import OrderDetail from '../../components/orders/order-detail.vue';
import OrderItems from '../../components/orders/order-items.vue';
import OrderStepper from '../../components/orders/order-stepper.vue';
import ScrollContainer from '../../components/scroll-container.vue';

useHead({
    title: 'Dashboard: Order Detail',
});
</script>

<template>
    <FormLayout>
        <ScrollContainer>
            <div class="relative flex flex-col flex-1">
                <div class="mb-4 flex items-center justify-between">
                    <NuxtLink to="/dashboard/order" :class="cn(buttonVariants({ variant: 'link' }))">
                        <IconArrowLeft />
                        Back to Orders
                    </NuxtLink>

                    <div class="flex items-center gap-2">
                        <Button variant="outline" class="h-[40px]">
                            <IconPrinter />
                            Print Order
                        </Button>
                        <Button class="h-[40px]">
                            <IconEdit />
                            Manage Order
                        </Button>
                    </div>
                </div>

                <div class="flex flex-col lg:grid lg:grid-cols-2 gap-5">
                    <OrderDetail />
                    <OrderStepper />
                    <OrderItems />
                </div>
            </div>
        </ScrollContainer>
    </FormLayout>
</template>
