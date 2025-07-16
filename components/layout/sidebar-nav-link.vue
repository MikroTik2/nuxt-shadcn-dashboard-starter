<script setup lang="ts">
import type { SidebarMenuButtonVariants } from '~/components/ui/sidebar';
import type { NavLink } from '~/types/nav';
import { useSidebar } from '~/components/ui/sidebar';

withDefaults(
       defineProps<{
              item: NavLink;
              size?: SidebarMenuButtonVariants['size'];
       }>(),
       {
              size: 'default',
       }
);

const { setOpenMobile } = useSidebar();
</script>

<template>
       <SidebarMenu>
              <SidebarMenuItem>
                     <SidebarMenuButton as-child :tooltip="item.title" :size="size">
                            <NuxtLink
                                   class="relative"
                                   :to="item.link"
                                   @click="setOpenMobile(false)"
                            >
                                   <component :is="item.icon" class="size-4" />
                                   <span>{{ item.title }}</span>
                                   <span
                                          v-if="item.new"
                                          class="rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                   >
                                          New
                                   </span>
                                   <span
                                          v-if="item.disabled"
                                          class="text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none peer-data-[active=true]/menu-button:text-sidebar-accent-foreground peer-data-[size=sm]/menu-button:top-1 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-foreground opacity-50"
                                   >
                                          Coming
                                   </span>
                            </NuxtLink>
                     </SidebarMenuButton>
              </SidebarMenuItem>
       </SidebarMenu>
</template>

<style scoped></style>
