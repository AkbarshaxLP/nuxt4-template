<template>
  <SidebarProvider>
    <AppSidebar variant="sidebar"/>
    <SidebarInset>
      <AppHeader />
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import AppSidebar from "~/components/common/AppSidebar/index.vue"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
</script>
