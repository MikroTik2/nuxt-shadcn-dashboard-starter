<script setup lang="ts">
import Header from './header.vue';
import SidebarNav from './sidebar-nav.vue';
</script>

<template>
       <SidebarProvider>
              <SidebarNav />

              <SidebarInset>
                     <Header />
                     <div class="h-full p-4 md:px-6">
                            <slot />
                     </div>
              </SidebarInset>
       </SidebarProvider>
</template>
