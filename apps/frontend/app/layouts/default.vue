<script setup lang="ts">
import AppSidebar from "@/components/global/AppSidebar.vue";
import {Separator} from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import AppBreadcrumb from "~/components/global/AppBreadcrumb.vue";
</script>

<template>
  <SidebarProvider>
    <AppSidebar/>
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger class="-ml-1"/>
        <Separator orientation="vertical" class="mr-2 h-4"/>
        <AppBreadcrumb/>
      </header>
      <slot />
    </SidebarInset>
    <HomeDialogRemoveFolder />
    <HomeDialogRemoveFile />
    <HomeDialogRenameFolder />
    <HomeDialogCreateRootFolder />
  </SidebarProvider>
</template>