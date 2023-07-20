<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore'
import { storeToRefs } from 'pinia'
import Modal from '@/components/Modal.vue';
import Button from 'primevue/button';

const store = useTaskStore()
const { visible, temp } = storeToRefs(store)

const openModal = () => {
  console.log('here');
  visible.value = true;
  temp.value = !temp.value;
}

const closeModal = () => {
  visible.value = false;
  console.log('here');

}
</script>

<template>
  <div class="body">

    <button @click="() => visible = true">open modal</button>

    <Modal header="Add Products/Services" :visible="visible" @closeModal="closeModal" :hasFooter="true">
      <template #body>
        <div class="flex flex-row justify-content-start align-items-center w-full gap-3">
          <div class="bg-red-200 h-8 w-full"></div>
          <div class="bg-blue-200 h-8 w-full"></div>
        </div>
      </template>

      <template #footer>
        <div class="flex flex-row justify-content-between w-full gap-3 bg-slate-100">
          <div><Button size="small" label="Secondary" severity="secondary" /></div>
          <div><Button size="small" label="Primary" /></div>
        </div>
      </template>
    </Modal>

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
