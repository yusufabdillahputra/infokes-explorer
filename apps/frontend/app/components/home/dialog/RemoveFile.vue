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
import {useFileRemoveDialogStore} from "~/stores/dialog";
import {useFileService} from "~/composables/services/use-file-service";

const {removeFileActionDialog} = useFileService()
const store = useFileRemoveDialogStore()
const {isOpen, file} = storeToRefs(store)
</script>

<template>
  <AlertDialog
      :default-open="false"
      :open="isOpen"
      @update:open="value => store.setIsOpen(value)"
  >
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Remove File {{ file?.name }}?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
          This will permanently delete your folder and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel class="cursor-pointer">Cancel</AlertDialogCancel>
        <AlertDialogAction class="cursor-pointer bg-destructive" @click="removeFileActionDialog">
          Yes, i'am sure
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>