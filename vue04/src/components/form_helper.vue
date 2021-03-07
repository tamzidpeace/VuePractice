<template>
  <div>
    <h1>Please fill out the form</h1>
    <form action="">
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>

      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>

      <div id="form-control">
        <slot name="form-controls"></slot>
      </div>

      <div id="useful-links">
        <ul>
          <li><a href="javascript:;">link 1</a></li>
          <li><a href="javascript:;">link 2</a></li>
          <li><a href="javascript:;">link 3</a></li>
          <li><a href="javascript:;">link 4</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  components: {},
  data() {
    return {}
  },
  methods: {}

}

</script>


<style scoped>
h1 {
  text-align: center;
}

form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

#useful-links ul {
  padding: 0;
}

#useful-links li {
  display: inline-block;
  margin-right: 10px;
}

form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}

#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>
