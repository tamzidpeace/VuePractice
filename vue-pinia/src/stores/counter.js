import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1011,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})