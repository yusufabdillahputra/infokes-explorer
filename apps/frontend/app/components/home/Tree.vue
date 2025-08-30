<script setup lang="ts">
import {ChevronRight, File, Folder} from "lucide-vue-next"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import type {SubFolder} from "~/types";
import {useFileStore} from "~/stores/file";


const fileStore = useFileStore();
const {name: nameStore} = storeToRefs(fileStore)
const props = defineProps<{
  item: SubFolder
}>()
const [name, ...items] = Array.isArray(props.item) ? props.item : [props.item]

function setFile(name: string): void {
  fileStore.setFile(name)
}
</script>

<template>
  <SidebarMenuButton
      v-if="!items.length"
      :is-active="name === nameStore"
      class="data-[active=true]:bg-transparent cursor-pointer"
      @click="setFile(name)"
  >
    <File/>
    {{ name }}
  </SidebarMenuButton>
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