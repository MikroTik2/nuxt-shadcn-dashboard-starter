<script setup lang="ts">
import type { DropdownMenuSeparatorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import {
    DropdownMenuSeparator,

} from 'reka-ui';
import { computed } from 'vue';

const props = defineProps<DropdownMenuSeparatorProps & {
    class?: HTMLAttributes['class'];
}>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <DropdownMenuSeparator v-bind="delegatedProps" :class="cn('-mx-1 my-1 h-px bg-accent dark:bg-zinc-700', props.class)" />
</template>
