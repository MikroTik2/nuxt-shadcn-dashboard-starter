<script setup lang="ts">
import Breadcrumbs from '../breadcrumbs.vue';
import UserNav from '../user-nav.vue';
</script>

<template>
       <header
              class="flex h-14 lg:h-[60px] shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear"
       >
              <div class="flex items-center gap-2 px-4">
                     <SidebarTrigger class="-ml-1 border-none" />

                     <Separator
                            orientation="vertical"
                            class="shrink-0 bg-border w-[1px] mr-2 h-4"
                     />
                     <Breadcrumbs />
              </div>

              <UserNav />
       </header>
</template>
