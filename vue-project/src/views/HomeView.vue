<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { tasks } = storeToRefs(store)
const { increment, changeName } = store
</script>

<template>
  <div class="body ">
    <div class="flex flex-row space-x-4  justify-center pt-10">
      <input class="rounded  border-none border-[0px] focus:outline-none color-[#ccc]" type="text"> 
      <button class="bg-blue-500 text-white rounded px-2 py-1" @click="increment">Increment</button>
    </div>

    <ul id="">
      <li v-for="task in tasks" :key="task">
        {{ task }}
      </li>
    </ul>
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