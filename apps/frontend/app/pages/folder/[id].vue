<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {useFileStore} from "~/stores/file";


const fileStore = useFileStore();
onMounted(() => {
  fileStore.resetFile()
})
</script>

<template>
  <ResizablePanelGroup
      id="folder-resizer"
      direction="horizontal"
      class="w-full"
  >
    <ResizablePanel id="folder-panel" :default-size="50">
      <HomePanelFolder/>
    </ResizablePanel>
    <ResizableHandle id="folder-resizer-handle"/>
    <ResizablePanel id="show-file-panel" :default-size="50">
      <HomePanelShowFile/>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>