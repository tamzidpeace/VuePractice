<template>
  <ul>
    <li v-for="game in games"> {{game}} </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      games: ['Fifa', 'NFS', 'COD']
    }
  },
}
</script>
