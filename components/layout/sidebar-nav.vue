<script setup lang="ts">
import { useRoute } from '#app';
import { LucideLayoutDashboard, LucidePackageSearch, LucideShoppingBag } from '#components';

const route = useRoute();

const navItems = ref<NavItems[]>([
       {
              title: 'Dashboard',
              url: '/dashboard/overview',
              icon: LucideLayoutDashboard,
              isActive: false,
              disabled: true,
              value: 'dashboard-overview',
              shortcut: ['o', 'o'],
              items: [],
       },
       {
              title: 'Tasks',
              url: '/dashboard/tasks',
              icon: LucidePackageSearch,
              isActive: false,
              value: 'dashboard-tasks',
              shortcut: ['p', 'p'],
              items: [],
       },
       {
              title: 'Orders',
              url: '/dashboard/orders',
              icon: LucideShoppingBag,
              isActive: false,
              disabled: true,
              value: 'dashboard-orders',
              shortcut: ['o', 'o'],
              items: [],
       },
       {
              title: 'Kanban',
              url: '/dashboard/kanban',
              icon: LucideShoppingBag,
              isActive: false,
              disabled: true,
              value: 'dashboard-kanban',
              shortcut: ['o', 'o'],
              items: [],
       },
]);
</script>

<template>
       <Sidebar collapsible="icon">
              <SidebarHeader>
                     <div class="flex gap-2 py-2 text-sidebar-accent-foreground">
                            <div
                                   class="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground"
                            >
                                   <svg
                                          class="dark:fill-white"
                                          width="800px"
                                          height="800px"
                                          viewBox="0 0 512 512"
                                          xmlns="http://www.w3.org/2000/svg"
                                   >
                                          <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
                                   </svg>
                            </div>
                            <div class="grid flex-1 text-left text-sm leading-tight">
                                   <span class="truncate font-semibold">Shadcn Dashboard</span>
                                   <span class="truncate text-xs">template</span>
                            </div>
                     </div>
              </SidebarHeader>
              <SidebarContent class="overflow-x-hidden">
                     <SidebarGroup>
                            <SidebarGroupLabel>Overview</SidebarGroupLabel>
                            <SidebarMenu tag="div">
                                   <Collapsible
                                          v-for="(element, i) in navItems"
                                          :key="i"
                                          :default-open="element.isActive"
                                   >
                                          <NuxtLink :to="element.url">
                                                 <SidebarMenuButton
                                                        class="hover:bg-accent"
                                                        :tooltip="element.title"
                                                        :class="
                                                               route.fullPath === `${element.url}`
                                                                      ? 'bg-accent'
                                                                      : ''
                                                        "
                                                 >
                                                        <component :is="element.icon" />
                                                        <span>{{ element.title }}</span>
                                                        <span
                                                               v-if="element.disabled"
                                                               class="text-sidebar-foreground pointer-events-none absolute right-3 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none peer-data-[active=true]/menu-button:text-sidebar-accent-foreground peer-data-[size=sm]/menu-button:top-1 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-foreground opacity-50"
                                                               >Coming</span
                                                        >
                                                        <IconChevronRight
                                                               v-if="element.isActive"
                                                               class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                                        />
                                                 </SidebarMenuButton>
                                          </NuxtLink>
                                   </Collapsible>
                            </SidebarMenu>
                     </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                     <SidebarMenu>
                            <SidebarMenuItem>
                                   <DropdownMenu>
                                          <DropdownMenuTrigger class="w-full">
                                                 <SidebarMenuButton
                                                        size="lg"
                                                        as="div"
                                                        class="hover:bg-muted hover:text-accent-foreground"
                                                 >
                                                        <Avatar
                                                               class="size-9 flex items-center justify-center"
                                                        >
                                                               <AvatarFallback class="text-sm">
                                                                      M
                                                               </AvatarFallback>
                                                        </Avatar>
                                                        <div
                                                               class="grid flex-1 text-left text-sm leading-tight"
                                                        >
                                                               <span class="truncate font-semibold">
                                                                      Mark
                                                               </span>
                                                               <span class="truncate text-xs">
                                                                      demo@gmail.com
                                                               </span>
                                                        </div>
                                                        <LucideChevronsUpDown
                                                               class="ml-auto size-4"
                                                        />
                                                 </SidebarMenuButton>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent class="min-w-60" align="end">
                                                 <DropdownMenuLabel class="flex items-center gap-2">
                                                        <Avatar
                                                               class="size-9 flex items-center justify-center"
                                                        >
                                                               <AvatarFallback class="text-sm">
                                                                      M
                                                               </AvatarFallback>
                                                        </Avatar>
                                                        <div
                                                               class="grid flex-1 text-left text-sm leading-tight"
                                                        >
                                                               <span class="truncate font-semibold">
                                                                      Mark
                                                               </span>
                                                               <span
                                                                      class="truncate font-normal text-xs"
                                                               >
                                                                      demo@gmail.com
                                                               </span>
                                                        </div>
                                                 </DropdownMenuLabel>
                                                 <DropdownMenuSeparator />
                                                 <DropdownMenuItem>
                                                        Profile
                                                        <span
                                                               class="ml-auto text-xs tracking-widest opacity-60"
                                                               >⇧⌘P</span
                                                        >
                                                 </DropdownMenuItem>
                                                 <DropdownMenuItem>
                                                        Billing
                                                        <span
                                                               class="ml-auto text-xs tracking-widest opacity-60"
                                                               >⌘B</span
                                                        >
                                                 </DropdownMenuItem>
                                                 <DropdownMenuItem>
                                                        Settings
                                                        <span
                                                               class="ml-auto text-xs tracking-widest opacity-60"
                                                               >⌘S</span
                                                        >
                                                 </DropdownMenuItem>
                                                 <DropdownMenuItem>New Team</DropdownMenuItem>
                                                 <DropdownMenuSeparator />
                                                 <DropdownMenuItem>
                                                        Log out
                                                        <span
                                                               class="ml-auto text-xs tracking-widest opacity-60"
                                                               >⇧⌘Q</span
                                                        >
                                                 </DropdownMenuItem>
                                          </DropdownMenuContent>
                                   </DropdownMenu>
                            </SidebarMenuItem>
                     </SidebarMenu>
              </SidebarFooter>
              <SidebarRail />
       </Sidebar>
</template>
