<script setup lang="ts">

</script>

<template>
    <Card>
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="tracking-tight text-2xl font-bold">
                Order ORD-12345
            </h3>
            <p class="text-sm text-muted-foreground">
                Placed on 2023-04-15
            </p>
        </div>
        <CardContent>
            <Separator class="mb-5" />

            <div class="space-y-4">
                <div class="space-y-2">
                    <h3 class="font-semibold">
                        Customer Information
                    </h3><p>Alice Johnson</p><p>alice@example.com</p><p class="text-sm text-muted-foreground">
                        123 Main St, Anytown, AN 12345
                    </p>
                </div><div class="space-y-2">
                    <h3 class="font-semibold">
                        Payment Method
                    </h3>
                    <div class="flex items-center gap-2">
                        <IconCreditCard :size="16" :stroke-width="1.5" class="font-normal" />
                        Visa ending in **** 1234
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
    <Card>
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-lg font-bold leading-none tracking-tight">
                Order Summary
            </h3>
        </div>

        <div class="p-6 pt-0 space-y-4">
            <div class="flex justify-between">
                <span>Subtotal</span><span>$101.97</span>
            </div><div class="flex justify-between">
                <span>Shipping</span><span>$10.00</span>
            </div><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full" /><div class="flex justify-between font-semibold">
                <span>Total</span><span>$111.97</span>
            </div>
        </div>
    </Card>
</template>
