<script>
// give each todo a unique id
let id = 0;

export default {
  data() {
    return {
      newTodo: "",
      todos: [{ id: id++, text: "Learn Vue" }],
    };
  },
  methods: {
    addTodo() {
      // ...
      this.todos.push({ id: id++, text: this.newTodo });
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
