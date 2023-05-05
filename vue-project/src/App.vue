<script>
import { useCounterStore } from '@/stores/counter'


const counter = useCounterStore()

</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>
  </div>
</template>
