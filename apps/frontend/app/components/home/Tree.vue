<script setup lang="ts">
import {ChevronRight, File, Folder, Trash} from "lucide-vue-next"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import type {SubFolder} from "~/types";
import {useFileStore} from "~/stores/file";
import {useFileService} from "~/composables/services/use-file-service";


const route = useRoute();
const fileStore = useFileStore();
const {handleDeleteFileAction} = useFileService();
const {name: nameStore} = storeToRefs(fileStore)
const props = defineProps<{
  item: SubFolder
}>()
const [name, ...items] = Array.isArray(props.item) ? props.item : [props.item]

function handleDeleteFile(name: string): void {
  if (route.params.id !== undefined) {
    const rootFolderId = parseInt(route?.params?.id as string)
    handleDeleteFileAction(rootFolderId, name)
  }
}
</script>

<template>
  <ContextMenu v-if="!items.length">
    <ContextMenuTrigger as-child>
      <SidebarMenuButton
          :is-active="name === nameStore"
          class="data-[active=true]:bg-transparent cursor-pointer"
          @click="fileStore.setFile(name)"
      >
        <File/>
        {{ name }}
      </SidebarMenuButton>
    </ContextMenuTrigger>
    <ContextMenuContent class="w-64">
      <ContextMenuItem inset @click="handleDeleteFile(name)">
        <Trash class="text-destructive"/>
        Delete
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
  <li v-else class="relative list-none">
    <Collapsible class="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
      <CollapsibleTrigger as-child>
        <SidebarMenuButton class="cursor-pointer">
          <ChevronRight class="transition-transform"/>
          <Folder/>
          <span class="text-primary">{{ name }}</span>
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul class="mx-3.5 flex min-w-0 flex-col border-l px-1 py-0.5">
          <Tree v-for="(subItem, index) in items" :key="index" :item="subItem"/>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  </li>
</template>