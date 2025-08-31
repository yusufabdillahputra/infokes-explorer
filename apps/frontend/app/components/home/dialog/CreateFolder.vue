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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import {useFolderService} from "~/composables/services/use-folder-service";
import {useCreateFolderDialogStore} from "~/stores/dialog";
import {useFolderRepository} from "~/composables/repositories/use-folder-repository";


const route = useRoute()
const rootFolderId = route.params.id as string
const {createFolderActionDialog} = useFolderService()
const {listSub} = useFolderRepository();
const store = useCreateFolderDialogStore()
const {isOpen} = storeToRefs(store)
const formSchema = toTypedSchema(
    z.object({
      name: z.string().nonempty(),
      parentId: z.number().nullish()
    })
);
const {isFieldDirty, handleSubmit} = useForm({
  validationSchema: formSchema
})
const onSubmit = handleSubmit((values) => {
  createFolderActionDialog(values)
})

const {data: dataParentFolder} = await listSub({
  "type": "FOLDER",
  "rootId": rootFolderId
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
        <DialogTitle>Create Folder</DialogTitle>
        <DialogDescription>
          Create your folder here. Click save when you're done.
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

        <FormField v-slot="{ componentField }" name="parentId" :validate-on-blur="!isFieldDirty">
          <FormItem v-auto-animate>
            <FormLabel>Parent Folder</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a folder"/>
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                      v-for="(item, index) in dataParentFolder?.data"
                      :key="index"
                      :value="item.id"

                  >
                    {{ item.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormDescription>
              Please empty this if root folder
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