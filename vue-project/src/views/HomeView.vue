<script setup lang="ts">


import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia'

const store = useCounterStore();
const { count, name } = storeToRefs(store);
const { increment, changeName } = store;

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <div>
      hello
      {{ count }}
      <br>
      {{ name }}

      <button @click="increment" >increment</button>
      <button @click="changeName" >changeName</button>
    </div>
  </main>
</template>
