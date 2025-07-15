<script setup lang="ts">
import { cn } from '@/lib/utils';
import { GithubIcon } from 'lucide-vue-next';
import { buttonVariants } from '~/components/ui/button';
import SearchInput from './search-input.vue';
import SwitchTheme from './switch-theme.vue';
</script>

<template>
       <div class="flex items-center justify-between gap-2 px-4">
              <SearchInput />
              <DropdownMenu>
                     <DropdownMenuTrigger>
                            <Avatar class="size-9 flex items-center justify-center">
                                   <AvatarFallback class="text-sm"> M </AvatarFallback>
                            </Avatar>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent class="min-w-60" align="end">
                            <DropdownMenuLabel>
                                   <div class="flex gap-2">
                                          <div class="grid flex-1 text-left text-sm leading-tight">
                                                 <span class="truncate font-semibold"> Mark </span>
                                                 <span
                                                        class="truncate font-normal text-xs text-muted-foreground"
                                                 >
                                                        demo@gmail.com
                                                 </span>
                                          </div>
                                   </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                   Profile
                                   <span class="ml-auto text-xs tracking-widest opacity-60"
                                          >⇧⌘P</span
                                   >
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                   Billing
                                   <span class="ml-auto text-xs tracking-widest opacity-60"
                                          >⌘B</span
                                   >
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                   Settings
                                   <span class="ml-auto text-xs tracking-widest opacity-60"
                                          >⌘S</span
                                   >
                            </DropdownMenuItem>
                            <DropdownMenuItem>New Team</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                   Log out
                                   <span class="ml-auto text-xs tracking-widest opacity-60"
                                          >⇧⌘Q</span
                                   >
                            </DropdownMenuItem>
                     </DropdownMenuContent>
              </DropdownMenu>
              <SwitchTheme />
              <a
                     href="https://github.com/MikroTik2/nuxt-shadcn-dashboard-starter"
                     target="_blank"
                     rel="noopener noreferrer"
                     :class="cn(buttonVariants({ variant: 'outline', size: 'icon' }))"
              >
                     <GithubIcon />
              </a>
       </div>
</template>
