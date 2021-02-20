<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>

    <br>

    <h3>Ninjas</h3>
    <ninjas></ninjas>

    <br>

    <h3>Games</h3>
    <games></games>

  </div>
</template>

<script>
import Games from './Games'

export default {
  components: {
    'games': Games,
  },
  data() {
    return {
      title: 'Your first vue file',
    }
  },

  methods: {
    greeting: function () {
      return 'Hi there'
    }
  }
}
</script>
