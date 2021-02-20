<template>
  <div>
    <ul>
      <li v-for="game in games"> {{ game }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: ['Fifa', 'NFS', 'COD']
    }
  },
}
</script>
