<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia'

const store = useCounterStore();
const { count, } = storeToRefs(store);
const { increment, decrement } = store;
</script>