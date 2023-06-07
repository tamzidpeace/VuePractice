import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(2);
  const name = ref<string | number>('arafat');
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++
  }

  const changeName = () => {
    name.value = 'arafat kamal';
  }

  return { count, name, doubleCount, increment, changeName }
})
