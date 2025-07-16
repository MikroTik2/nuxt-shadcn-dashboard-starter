<script setup lang="ts">
import type { NavGroup, NavLink, NavSectionTitle, NavMenu  } from '~/types/nav';
import { LucideGalleryVerticalEnd, LucideAudioWaveform, LucideCommand,
       LucideCheckSquare2,
       LucideLayoutGrid,
       LucideLayoutDashboard,
       LucideUser2 } from '#components';

const navMenu: NavMenu[] = [
       {
              heading: 'General',
              items: [
                     {
                            title: 'Overview',
                            icon: LucideLayoutDashboard,
                            link: '/dashboard/overview',
                            disabled: true,
                            new: false,
                     },
                     {
                            title: 'Account',
                            icon: LucideUser2,
                            new: true,
                            isActive: true,
                            children: [
                                   {
                                          title: 'Profile',
                                          link: '/dashboard/profile',
                                   },
                                   {
                                          title: 'Login',
                                          link: '/',
                                   },
                            ],
                     },
                     {
                            title: 'Tasks',
                            icon: LucideCheckSquare2,
                            link: '/dashboard/tasks',
                            new: true,
                     },
                     {
                            title: 'Kanban',
                            icon: LucideLayoutGrid,
                            disabled: true,
                            link: '/dashboard/kanban',
                            new: false,
                     },
              ],
       },
];

const teams: { name: string; logo: Component; plan: string }[] = [
       {
              name: 'Acme Inc',
              logo: LucideGalleryVerticalEnd,
              plan: 'Enterprise',
       },
       {
              name: 'Acme Corp.',
              logo: LucideAudioWaveform,
              plan: 'Startup',
       },
       {
              name: 'Evil Corp.',
              logo: LucideCommand,
              plan: 'Free',
       },
];

const user: { name: string; email: string } = {
       name: 'Mark',
       email: 'demo@gmail.com',
};

function resolveNavItemComponent(item: NavLink | NavGroup | NavSectionTitle): any {
       if ('children' in item) return resolveComponent('LayoutSidebarNavGroup');

       return resolveComponent('LayoutSidebarNavLink');
}

const { sidebar } = useAppSettings();
</script>

<template>
       <Sidebar :collapsible="sidebar.collapsible" :side="sidebar.side" :variant="sidebar.variant">
              <SidebarHeader>
                     <LayoutSidebarNavHeader :teams="teams" />
              </SidebarHeader>
              <SidebarContent>
                     <SidebarGroup v-for="(nav, indexGroup) in navMenu" :key="indexGroup">
                            <SidebarGroupLabel v-if="nav.heading">
                                   {{ nav.heading }}
                            </SidebarGroupLabel>
                            <component
                                   :is="resolveNavItemComponent(item)"
                                   v-for="(item, index) in nav.items"
                                   :key="index"
                                   :item="item"
                            />
                     </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                     <LayoutSidebarNavFooter :user="user" />
              </SidebarFooter>
              <SidebarRail />
       </Sidebar>
</template>
