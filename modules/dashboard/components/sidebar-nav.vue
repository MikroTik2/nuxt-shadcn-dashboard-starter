<script setup lang="ts">
import { useRoute } from '#app';
import { IconLayoutDashboard, IconPackageSearch, IconShoppingBag } from '#components';

const route = useRoute();

interface IMenuItems {
    title: string;
    url: string;
    disabled?: boolean;
    external?: boolean;
    shortcut?: [string, string];
    icon?: Component;
    label?: string;
    description?: string;
    value?: string;
    isActive?: boolean;
    items?: IMenuItems[];
}

const menuItems = ref<IMenuItems[]>([
    {
        title: 'Dashboard',
        url: '/dashboard/overview',
        icon: IconLayoutDashboard,
        isActive: false,
        value: 'dashboard-overview',
        shortcut: ['o', 'o'],
        items: [],
    },
    {
        title: 'Products',
        url: '/dashboard/product',
        icon: IconShoppingBag,
        isActive: false,
        value: 'dashboard-products',
        shortcut: ['p', 'p'],
        items: [],
    },
    {
        title: 'Orders',
        url: '/dashboard/order',
        icon: IconPackageSearch,
        isActive: false,
        value: 'dashboard-orders',
        shortcut: ['o', 'o'],
        items: [],
    },
]);
</script>

<template>
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <div class="flex gap-2 py-2 text-sidebar-accent-foreground">
                <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <svg class="dark:fill-white" width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M256,48,496,464H16Z" />
                    </svg>
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">Shadcn dashboard</span>
                    <span class="truncate text-xs">template</span>
                </div>
            </div>
        </SidebarHeader>
        <SidebarContent class="overflow-x-hidden">
            <SidebarGroup>
                <SidebarGroupLabel>Overview</SidebarGroupLabel>
                <SidebarMenu tag="div">
                    <Collapsible
                        v-for="(element, i) in menuItems"
                        :key="i"
                        :default-open="element.isActive"
                    >
                        <NuxtLink :to="element.url">
                            <SidebarMenuButton
                                class="hover:bg-accent"
                                :tooltip="element.title"
                                :class="
                                    route.fullPath === `${element.url}` ? 'bg-accent' : ''
                                "
                            >
                                <component :is="element.icon" />
                                <span>{{ element.title }}</span>
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
                                <Avatar class="h-8 dark:border-zinc-800 border dark:bg-zinc-900 w-8 rounded-lg">
                                    <AvatarFallback>
                                        MA
                                    </AvatarFallback>
                                </Avatar>
                                <div class="grid flex-1 text-left text-sm leading-tight">
                                    <span class="truncate font-semibold"> Mark </span>
                                    <span class="truncate text-xs"> demo@gmail.com </span>
                                </div>
                                <IconChevronsUpDown class="ml-auto size-4" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="min-w-60" align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Profile
                                <span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                                <span class="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                                <span class="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>New Team</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Log out
                                <span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
    </Sidebar>
</template>
