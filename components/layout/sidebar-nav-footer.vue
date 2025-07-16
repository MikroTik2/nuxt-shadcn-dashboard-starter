<script setup lang="ts">
import {
       LucideBadgeCheck,
       LucideBell,
       LucideChevronsUpDown,
       LucideGithub,
       LucideLogOut,
       LucideSettings,
       LucideSparkles,
} from '#components';
import { useSidebar } from '~/components/ui/sidebar';

defineProps<{
       user: {
              name: string;
              email: string;
       };
}>();

const { isMobile, setOpenMobile } = useSidebar();

function handleLogout() {
       navigateTo('/');
}

const showModalTheme = ref(false);
</script>

<template>
       <SidebarMenu>
              <SidebarMenuItem>
                     <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                   <SidebarMenuButton
                                          size="lg"
                                          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                   >
                                          <Avatar>
                                                 <AvatarFallback>
                                                        {{
                                                               user.name
                                                                      .split(' ')
                                                                      .map((n) => n[0])
                                                                      .join('')
                                                        }}
                                                 </AvatarFallback>
                                          </Avatar>
                                          <div class="grid flex-1 text-left text-sm leading-tight">
                                                 <span class="truncate font-semibold">{{
                                                        user.name
                                                 }}</span>
                                                 <span class="truncate text-xs">{{
                                                        user.email
                                                 }}</span>
                                          </div>
                                          <LucideChevronsUpDown class="ml-auto size-4" />
                                   </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                   class="min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg"
                                   :side="isMobile ? 'bottom' : 'right'"
                                   align="end"
                            >
                                   <DropdownMenuLabel class="p-0 font-normal">
                                          <div
                                                 class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                                          >
                                                 <Avatar>
                                                        <AvatarFallback>
                                                               {{
                                                                      user.name
                                                                             .split(' ')
                                                                             .map((n) => n[0])
                                                                             .join('')
                                                               }}
                                                        </AvatarFallback>
                                                 </Avatar>
                                                 <div
                                                        class="grid flex-1 text-left text-sm leading-tight"
                                                 >
                                                        <span class="truncate font-semibold">{{
                                                               user.name
                                                        }}</span>
                                                        <span class="truncate text-xs">{{
                                                               user.email
                                                        }}</span>
                                                 </div>
                                          </div>
                                   </DropdownMenuLabel>
                                   <DropdownMenuSeparator />
                                   <DropdownMenuGroup>
                                          <DropdownMenuItem>
                                                 <LucideSparkles />
                                                 Upgrade to Pro
                                          </DropdownMenuItem>
                                   </DropdownMenuGroup>
                                   <DropdownMenuSeparator />
                                   <DropdownMenuGroup>
                                          <DropdownMenuItem>
                                                 <LucideBadgeCheck />
                                                 Account
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                                 <LucideSettings />
                                                 Settings
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                                 <LucideBell />
                                                 Notifications
                                          </DropdownMenuItem>
                                          <DropdownMenuSeparator />
                                          <DropdownMenuItem as-child>
                                                 <NuxtLink
                                                        to="https://github.com/MikroTik2/nuxt-shadcn-dashboard-starter"
                                                        external
                                                        target="_blank"
                                                 >
                                                        <LucideGithub />
                                                        Github Repository
                                                 </NuxtLink>
                                          </DropdownMenuItem>
                                   </DropdownMenuGroup>
                                   <DropdownMenuSeparator />
                                   <DropdownMenuItem @click="handleLogout">
                                          <LucideLogOut />
                                          Log out
                                   </DropdownMenuItem>
                            </DropdownMenuContent>
                     </DropdownMenu>
              </SidebarMenuItem>
       </SidebarMenu>

       <Dialog v-model:open="showModalTheme">
              <DialogContent>
                     <DialogHeader>
                            <DialogTitle>Customize</DialogTitle>
                            <DialogDescription class="text-xs text-muted-foreground">
                                   Customize & Preview in Real Time
                            </DialogDescription>
                     </DialogHeader>
                     <ThemeCustomize />
              </DialogContent>
       </Dialog>
</template>
