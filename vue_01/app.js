Vue.component('todo-item', {
     props: ['todo'],
     template: `<li>{{ todo.text }}</li>`
})

Vue.component('c1', {
     template: `<div> hello world </div>`
})

var app2 = new Vue({
     el: '#app-2',
     data: {
          message: 'You loaded this page on ' + new Date().toLocaleString(),
          groceryList: [{
                    id: 0,
                    text: 'Vegetables'
               },
               {
                    id: 1,
                    text: 'Cheese'
               },
               {
                    id: 2,
                    text: 'Whatever else humans are supposed to eat'
               }
          ],
     }
})