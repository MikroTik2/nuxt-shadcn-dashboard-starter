<script setup lang="ts">
import { LucideChevronsUpDown, LucidePlus } from '#components';
import { useSidebar } from '~/components/ui/sidebar';

const props = defineProps<{
       teams: {
              name: string;
              logo: Component;
              plan: string;
       }[];
}>();

const { isMobile } = useSidebar();

const activeTeam = ref(props.teams[0]);
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
                                          <div
                                                 class="aspect-square size-8 flex items-center justify-center rounded-lg bg-white text-sidebar"
                                          >
                                                 <component :is="activeTeam.logo" class="size-4" />
                                          </div>
                                          <div class="grid flex-1 text-left text-sm leading-tight">
                                                 <span class="truncate font-semibold">
                                                        {{ activeTeam.name }}
                                                 </span>
                                                 <span class="truncate text-xs">{{
                                                        activeTeam.plan
                                                 }}</span>
                                          </div>
                                          <LucideChevronsUpDown class="ml-auto" />
                                   </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                   class="min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg"
                                   align="start"
                                   :side="isMobile ? 'bottom' : 'right'"
                            >
                                   <DropdownMenuLabel class="text-xs text-muted-foreground">
                                          Teams
                                   </DropdownMenuLabel>
                                   <DropdownMenuItem
                                          v-for="(team, index) in teams"
                                          :key="team.name"
                                          class="gap-2 p-2"
                                          @click="activeTeam = team"
                                   >
                                          <div
                                                 class="size-6 flex items-center justify-center border rounded-sm"
                                          >
                                                 <component
                                                        :is="team.logo"
                                                        class="size-4 shrink-0"
                                                 />
                                          </div>
                                          {{ team.name }}
                                          <DropdownMenuShortcut
                                                 >⌘{{ index + 1 }}</DropdownMenuShortcut
                                          >
                                   </DropdownMenuItem>
                                   <DropdownMenuSeparator />
                                   <DropdownMenuItem class="gap-2 p-2">
                                          <div
                                                 class="size-6 flex items-center justify-center border rounded-md bg-background"
                                          >
                                                 <LucidePlus class="size-4" />
                                          </div>
                                          <div class="text-muted-foreground font-medium">
                                                 Add team
                                          </div>
                                   </DropdownMenuItem>
                            </DropdownMenuContent>
                     </DropdownMenu>
              </SidebarMenuItem>
       </SidebarMenu>
</template>

<style scoped></style>
