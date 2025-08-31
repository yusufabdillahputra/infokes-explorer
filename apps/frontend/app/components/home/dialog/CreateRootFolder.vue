<script setup lang="ts">
import {vAutoAnimate} from "@formkit/auto-animate/vue"
import {toTypedSchema} from "@vee-validate/zod"
import {useForm} from "vee-validate"
import {z} from 'zod';
import {Button} from "@/components/ui/button"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Input} from "@/components/ui/input"
import {useFolderService} from "~/composables/services/use-folder-service";
import {useRootFolderCreateDialogStore} from "~/stores/dialog";


const {createRootFolderActionDialog} = useFolderService()
const store = useRootFolderCreateDialogStore()
const {isOpen} = storeToRefs(store)
const formSchema = toTypedSchema(
    z.object({
      name: z.string().nonempty(),
    })
);
const {isFieldDirty, handleSubmit} = useForm({
  validationSchema: formSchema
})
const onSubmit = handleSubmit((values) => {
  createRootFolderActionDialog(values.name)
})
</script>

<template>
  <Dialog
      :default-open="false"
      :open="isOpen"
      @update:open="value => store.setIsOpen(value)"
  >
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Root Folder</DialogTitle>
        <DialogDescription>
          Create your root folder here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <form class="w-full space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="name" :validate-on-blur="!isFieldDirty">
          <FormItem v-auto-animate>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Folder Name" v-bind="componentField"/>
            </FormControl>
            <FormDescription>
              Please enter your folder name here.
            </FormDescription>
            <FormMessage/>
          </FormItem>
        </FormField>
        <DialogFooter>
          <Button type="button" class="cursor-pointer" @click="store.$reset()">
            Cancel
          </Button>
          <Button class="cursor-pointer bg-primary" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>