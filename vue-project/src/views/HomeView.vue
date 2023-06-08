<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore'
import { storeToRefs } from 'pinia'
import Task from './TaskComponent.vue'


const store = useTaskStore()
const { task, tasks } = storeToRefs(store)
const { addTask } = store
</script>

<template>
  <div class="body">
    <div class="flex flex-row space-x-4 justify-center pt-10">
      <input
        class="rounded border-none border-[0px] focus:outline-none color-[#ccc]"
        type="text"
        :value="task"
        @input="task = $event.target.value"
      />

      <button class="bg-blue-500 text-white rounded px-2 py-1" @click="addTask">Add</button>
    </div>

    <div class="flex flex-row mt-5 w-full justify-center">
      <ul id="">
        <li v-for="(task, index) in tasks" :key="index">
          <Task :title="task" :index="index" />
        </li>
      </ul>
    </div>
  </div>

  
</template>


<style scoped lang="scss">
.body {
  background-color: whitesmoke;
  height: 100vh;
  width: 100vw;
  margin: 0%;
  padding: 0%;
}
.add-task {
  display: flex;
  direction: row;
  justify-content: center;
}
</style>
