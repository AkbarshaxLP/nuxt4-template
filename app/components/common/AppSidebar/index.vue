<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'
import { options as data } from './options'

import NavMain from '~/components/common/AppSidebar/NavMain.vue'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <a href="#">
              <div class="flex aspect-square size-12 items-center justify-center rounded-lg">
                <!-- <component :is="data.head.logo" class="size-8" /> -->
                <icon-svg-logo />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ data.head.title }}</span>
                <span class="truncate text-xs">{{ data.head.description }}</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
    </SidebarContent>
  </Sidebar>
</template>
