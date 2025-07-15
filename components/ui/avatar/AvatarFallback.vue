<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { AvatarFallback, type AvatarFallbackProps } from 'reka-ui';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../button';

const props = defineProps<AvatarFallbackProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
       <AvatarFallback
              data-slot="avatar-fallback"
              v-bind="delegatedProps"
              :class="cn(buttonVariants({ size: 'icon', variant: 'outline' }), props.class)"
       >
              <slot />
       </AvatarFallback>
</template>
