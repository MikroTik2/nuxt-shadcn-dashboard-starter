<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { Separator } from 'reka-ui';
import { computed } from 'vue';

const props = defineProps<SeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <Separator
        v-bind="delegatedProps"
        :class="cn('-mx-1 h-px dark:bg-zinc-700 bg-accent', props.class)"
    >
        <slot />
    </Separator>
</template>
