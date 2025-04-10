<script setup lang="ts">
import type { SelectTriggerProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-icons/vue';
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui';
import { computed } from 'vue';

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <SelectTrigger
        v-bind="forwardedProps"
        :class="cn(
            'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md dark:border-zinc-700 border bg-white dark:bg-zinc-800 px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start',
            props.class,
        )"
    >
        <slot />
        <SelectIcon as-child>
            <ChevronDownIcon class="w-4 h-4 opacity-50 shrink-0" />
        </SelectIcon>
    </SelectTrigger>
</template>
