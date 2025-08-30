<script setup lang="ts">
import type {SidebarProps} from "@/components/ui/sidebar";
import {FolderIcon, Trash, MoreHorizontal, Plus, FolderX} from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarGroupAction,
  SidebarMenuAction,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";
import * as DM from "@/components/ui/dropdown-menu";
import {Badge} from "~/components/ui/badge";
import {useFolderRepository} from "~/composables/repositories/use-folder-repository";
import {useFolderService} from "~/composables/services/use-folder-service";

const props = defineProps<SidebarProps>()
const {list} = useFolderRepository()
const {onNavigateTo} = useFolderService()
const {data: readResponse, pending, error} = await list()
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Root Folders</SidebarGroupLabel>
        <SidebarGroupAction title="Add Folder" class="cursor-pointer">
          <Plus/>
          <span class="sr-only">Add Folder</span>
        </SidebarGroupAction>
        <SidebarGroupContent class="mt-5">
          <SidebarMenu v-if="error" class="ml-2">
            <SidebarMenuItem>
              <Badge variant="destructive">
                <FolderX/>
                Error Fetch Root Folders
              </Badge>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenu v-else-if="pending">
            <SidebarMenuItem v-for="i in 5" :key="i">
              <SidebarMenuSkeleton/>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenu v-else>
            <SidebarMenuItem v-for="(item, index) in readResponse?.data" :key="index">
              <SidebarMenuButton class="cursor-pointer" @click="onNavigateTo(item)">
                <FolderIcon/>
                {{ item.name }}
              </SidebarMenuButton>
              <DM.DropdownMenu>
                <DM.DropdownMenuTrigger as-child>
                  <SidebarMenuAction class="cursor-pointer">
                    <MoreHorizontal/>
                  </SidebarMenuAction>
                </DM.DropdownMenuTrigger>
                <DM.DropdownMenuContent side="right" align="start">
                  <DM.DropdownMenuItem class="cursor-pointer">
                    <Trash class="text-destructive"/>
                    <span>Delete Folder</span>
                  </DM.DropdownMenuItem>
                </DM.DropdownMenuContent>
              </DM.DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail/>
  </Sidebar>
</template>