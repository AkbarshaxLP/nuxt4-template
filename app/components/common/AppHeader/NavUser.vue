<script setup lang="ts">
import { LogOut } from 'lucide-vue-next'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

defineProps<{
  user: {
    name: string
    email: string
    avatar: string
  }
}>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="secondary" class="flex gap-2.5">
        <Avatar class="h-8 w-8 rounded-lg">
          <AvatarImage :src="user.avatar" :alt="user.name" />
          <AvatarFallback class="rounded-lg">
            {{ user?.name?.slice(0, 2).toUpperCase() }}
          </AvatarFallback>
        </Avatar>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-medium">{{ user.name }}</span>
          <span class="truncate text-xs">{{ user.email }}</span>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="min-w-56 rounded-lg" side="bottom" align="end" :side-offset="4">
      <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar class="h-8 w-8 rounded-lg">
            <AvatarImage :src="user.avatar" :alt="user.name" />
            <AvatarFallback class="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ user.name }}</span>
            <span class="truncate text-xs">{{ user.email }}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <!-- <DropdownMenuGroup>
        <DropdownMenuItem>
          <BadgeCheck />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup> -->
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut />
        Выйти
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
