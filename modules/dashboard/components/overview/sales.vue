<script setup lang="ts">
const sales = [
    { name: 'Oli Martin', email: 'oli.martin@email.com', amount: 1999.00 },
    { name: 'Jane Doe', email: 'jane.doe@email.com', amount: 849.50 },
    { name: 'Carlos Reyes', email: 'carlos.reyes@email.com', amount: 129.99 },
    { name: 'Emily Smith', email: 'emily.smith@email.com', amount: 2750.00 },
    { name: 'Liam Johnson', email: 'liam.johnson@email.com', amount: 430.75 },
    { name: 'Sophie Lee', email: 'sophie.lee@email.com', amount: 982.10 },
    { name: 'Daniel Kim', email: 'daniel.kim@email.com', amount: 512.00 },
    { name: 'Isabella Rossi', email: 'isabella.rossi@email.com', amount: 1530.25 },
];
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>

        <Separator orientation="horizontal" />

        <CardContent>
            <ScrollArea class="space-y-8 max-h-[328px]">
                <div v-for="(sale, i) in sales" :key="i" class="flex py-4 items-center">
                    <div class="space-y-1">
                        <p class="text-sm font-medium leading-none">
                            {{ sale.name }}
                        </p>
                        <p class="text-sm text-muted-foreground">
                            {{ sale.email }}
                        </p>
                    </div>
                    <div class="ml-auto font-medium">
                        +${{ sale.amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) }}
                    </div>
                </div>
            </ScrollArea>
        </CardContent>
    </Card>
</template>
