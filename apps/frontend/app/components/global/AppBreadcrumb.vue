<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {useFileStore} from "~/stores/file";

const fileStore = useFileStore()
const {breadcrumbs, name, rootFolder} = storeToRefs(fileStore)
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-if="fileStore.isAlreadyIndexing">
        <BreadcrumbItem class="hidden md:block">
          <BreadcrumbPage>
            {{ rootFolder?.name }}
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator class="hidden md:block"/>
      </template>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <BreadcrumbItem class="hidden md:block">
          <BreadcrumbPage>
            {{ breadcrumb }}
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator class="hidden md:block"/>
      </template>
      <template v-if="fileStore.isFileExists">
        <BreadcrumbItem class="hidden md:block">
          <BreadcrumbPage>
            {{ name }}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>