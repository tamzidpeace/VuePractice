<template>
  <div class="flex flex-row justify-between space-x-3 bg-white p-2 my-2 w-[250px]">
    <div class="break-all">{{ title }}</div>

    <div class="pr-1 flex flex-row justify-end space-x-1 items-center cursor-pointer">
      <button class="text-red-400 text-sm" @click="removeTask(index)">Remove</button>

      <div class="text-blue-400 text-sm pr-1" @click="visible = true">Update</div>
    </div>

    <Dialog
      v-model:visible="visible"
      modal
      header="Update Task"
      :style="{ width: '50vw' }"
      closeOnEscape
    >
      <div class="flex flex-row space-x-4 justify-center">
        <input
          class="rounded bg-slate-100 border-none border-[0px] focus:outline-none color-[#ccc]"
          type="text"
          v-model="task"
        />

        <button class="bg-blue-500 text-white rounded px-2 py-1" @click="handleTaskUpdate(index)">
          Update
        </button>
      </div>
    </Dialog>

  </div>

 

</template>


<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'
import { useTaskStore } from '../stores/taskStore'
import { storeToRefs } from 'pinia'
import Dialog from 'primevue/dialog'

const store = useTaskStore()
// const { task, tasks } = storeToRefs(store)
const { removeTask, updateTask } = store

const visible = ref<boolean>(false)
const task = ref<string>('')

const props = defineProps<{
  title: string
  index: number
}>()

watch(visible, () => {
  if (visible.value) task.value = props.title
})

const handleTaskUpdate = (index: number) => {
  updateTask(index, task.value)
  visible.value = false
}


const y = ref<string>('abc')

setTimeout(() => {
  y.value = 'rafsan'
}, 2000);
</script>


