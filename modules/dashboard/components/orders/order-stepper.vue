<script setup lang="ts">
import { IconCheck, IconTruck } from '#components';

const steps = [
    {
        step: 1,
        title: 'Processing',
        icon: IconCheck,
    },
    {
        step: 2,
        title: 'Shipped',
        icon: IconTruck,
    },
    {
        step: 3,
        title: 'Out for Delivery',
        icon: IconTruck,
    },
    {
        step: 4,
        title: 'Delivered',
        icon: IconCheck,
    },
];
</script>

<template>
    <Card class="col-span-2">
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-lg font-bold leading-none tracking-tight">
                Delivery Status
            </h3>
        </div>

        <CardContent>
            <div class="space-y-6">
                <Stepper class="justify-between">
                    <StepperItem
                        v-for="item in steps"
                        :key="item.step"
                        :step="item.step"
                    >
                        <StepperTrigger>
                            <StepperIndicator class="w-[45px] h-[45px]">
                                <component :is="item.icon" class="w-[18px] h-[18px]" />
                            </StepperIndicator>
                            <div class="flex flex-col">
                                <StepperTitle class="sr-only">
                                    stepper title
                                </StepperTitle>
                                <StepperDescription>
                                    {{ item.title }}
                                </StepperDescription>
                            </div>
                        </StepperTrigger>
                    </StepperItem>
                </Stepper>

                <Progress class="h-3" :model-value="15" />

                <div class="text-sm text-muted-foreground">
                    <Badge class="rounded-full">
                        Processing
                    </Badge>
                    on Decembe 23, 2024
                </div>
            </div>
        </CardContent>
    </Card>
</template>
