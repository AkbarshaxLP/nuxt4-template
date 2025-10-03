<template>
  <header
    class="flex px-4 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b"
  >
    <div class="flex items-center gap-2 flex-1">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem class="hidden md:block">
            <BreadcrumbLink href="#">Админ панель</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Дашборд</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <div>
      <AppHeaderNavUser :user="user" />
    </div>
  </header>
</template>

<script setup lang="ts">
const user = {
  name: 'Akbar',
  email: 'akbarshax.lp@gmail.com',
  avatar: '/avatars/shadcn.jpg',
}
</script>
