<template>
  <div>
    <form-helper></form-helper>
  </div>
</template>

<script>
import formHelper from './components/form_helper'

export default {
  components: {
    'form-helper': formHelper
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {},
}
</script>

