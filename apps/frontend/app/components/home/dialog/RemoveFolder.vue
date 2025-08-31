<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {useFolderRemoveDialogStore} from "~/stores/dialog";
import {useFolderService} from "~/composables/services/use-folder-service";

const {removeFolderActionDialog} = useFolderService()
const store = useFolderRemoveDialogStore()
const {isOpen, folder} = storeToRefs(store)
</script>

<template>
  <AlertDialog
      :default-open="false"
      :open="isOpen"
      @update:open="value => store.setIsOpen(value)"
  >
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Remove {{ folder?.name }}?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
          This will permanently delete your folder and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel class="cursor-pointer">Cancel</AlertDialogCancel>
        <AlertDialogAction class="cursor-pointer bg-destructive" @click="removeFolderActionDialog">
          Yes, i'am sure
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>