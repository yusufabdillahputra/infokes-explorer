<script setup lang="ts">
import {File, FileX} from "lucide-vue-next";
import {useFileStore} from "~/stores/file";

const store = useFileStore()
const {name} = storeToRefs(store)
</script>

<template>
  <section class="flex flex-col items-center justify-center py-20">
    <Transition
        enter-active-class="animate-[fade-in_0.5s_ease-in_forwards]"
        leave-active-class="animate-[fade-out_0.5s_ease-out_forwards]"
    >
      <File v-if="store.isFileExists" class="size-50"/>
    </Transition>
    <Transition
        enter-active-class="animate-[fade-in_0.5s_ease-in_forwards]"
        leave-active-class="animate-[fade-out_0.5s_ease-out_forwards]"
    >
      <p v-if="store.isFileExists">
        {{ name }}
      </p>
    </Transition>
    <Transition
        enter-active-class="animate-[fade-in_0.5s_ease-in_forwards]"
        leave-active-class="animate-[fade-out_0.5s_ease-out_forwards]"
    >
      <FileX v-if="!store.isFileExists" class="size-50"/>
    </Transition>
    <Transition
        enter-active-class="animate-[fade-in_0.5s_ease-in_forwards]"
        leave-active-class="animate-[fade-out_0.5s_ease-out_forwards]"
    >
      <p v-if="!store.isFileExists">
        Please choose a file from folder.
      </p>
    </Transition>
  </section>
</template>