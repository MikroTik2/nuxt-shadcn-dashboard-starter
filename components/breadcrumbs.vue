<script setup lang="ts">
import {
       Breadcrumb,
       BreadcrumbItem,
       BreadcrumbList,
       BreadcrumbPage,
       BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useBreadcrumbs } from '~/composables/use-breadcrumbs';

const items = useBreadcrumbs();
</script>

<template>
       <Breadcrumb v-if="items.length > 0">
              <BreadcrumbList>
                     <template v-for="(item, index) in items" :key="item.title">
                            <BreadcrumbItem
                                   v-if="index !== items.length - 1"
                                   class="hidden md:block"
                            >
                                   <NuxtLink
                                          class="transition-colors hover:text-foreground"
                                          :href="item.link"
                                   >
                                          {{ item.title }}
                                   </NuxtLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator
                                   v-if="index < items.length - 1"
                                   class="hidden md:block"
                            />

                            <BreadcrumbPage v-if="index === items.length - 1">
                                   {{ item.title }}
                            </BreadcrumbPage>
                     </template>
              </BreadcrumbList>
       </Breadcrumb>
</template>
