<script setup lang="ts">
import HomeTree from "@/components/home/Tree.vue";
import HomeSkeleton from "@/components/home/Skeleton.vue";
import {FolderX} from "lucide-vue-next";
import {Badge} from "@/components/ui/badge";
import {useFolderRepository} from "~/composables/repositories/use-folder-repository";
import {useFolderService} from "~/composables/services/use-folder-service";


const route = useRoute();
const {retrieve} = useFolderRepository()
const {indexing} = useFolderService()
const {instance, pending, error} = await retrieve(route?.params?.id, indexing)
</script>

<template>
  <section class="flex h-[200px] p-6">
    <div v-if="error">
      <Badge variant="destructive">
        <FolderX/>
        Error Fetch Sub Folders
      </Badge>
    </div>
    <div v-else-if="pending">
      <HomeSkeleton/>
    </div>
    <div v-else>
      <HomeTree v-for="(item, index) in instance?.data?.sub" :key="index" :item="item"/>
    </div>
  </section>
</template>