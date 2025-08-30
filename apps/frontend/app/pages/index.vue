<script setup lang="ts">
import {Badge} from "~/components/ui/badge";
import {useFileStore} from "~/stores/file";


const fileStore = useFileStore();
onMounted(() => {
  fileStore.$reset()
})
</script>

<template>
  <section class="p-5">
    <Badge>
      Please choose one of the folder
    </Badge>
  </section>
</template>