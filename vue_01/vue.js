Vue.component('todo-item', {
    template: `<p>My name is {{name}} <button v-on:click="changeName">Change Name</button></p>`,
    data: function () {
        return {
         name: 'Arafat',
        }
    },
    methods: {
      changeName: function () {
          this.name = 'Kamal'
      }
    },
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        title: 'Test',
    },
    methods: {
        printName: function () {
            console.log('Arafat');
        }
    }
})