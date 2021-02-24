<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>


export default {
  data() {
    return {
      title: 'Vue Ninjas'
    }
  },
  methods: {
    changeTitle: function () {
      //this.title = "Changed Title"
      this.$emit('changeTitle', 'Vue Wizard')
    }
  }
}
</script>

<style scoped>

header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}


</style>
