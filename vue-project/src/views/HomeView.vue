<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore'
import { storeToRefs } from 'pinia'
import Task from './TaskComponent.vue'
import Form from './FormView.vue';
import { ref } from 'vue';
import MultiSelect from 'primevue/multiselect';



const store = useTaskStore()
const { task, tasks } = storeToRefs(store)
const { addTask } = store

const selectedCities = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  

]);
</script>

<template>
  <div class="body">
    <div class="flex flex-row space-x-4 justify-center pt-10">
      <input class="rounded border-none border-[0px] focus:outline-none color-[#ccc]" type="text" :value="task"
        @input="task = $event.target.value" />

      <button class="bg-blue-500 text-white rounded px-2 py-1" @click="addTask">Add</button>
    </div>

    <div class="flex flex-row mt-5 w-full justify-center">
      <ul id="">
        <li v-for="(task, index) in tasks" :key="index">
          <Task :title="task" :index="index" />
        </li>
      </ul>
    </div>

    <div class="card flex justify-content-center">
      <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
        :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>

    <div>
      <Form />
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
