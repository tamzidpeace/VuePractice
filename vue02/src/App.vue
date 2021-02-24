<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ninjas from "./components/Ninjas";

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
  },
  data() {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Ryu1', speciality: 'Vue Components1', show: false},
        {name: 'Ryu2', speciality: 'Vue Components2', show: false},
      ],
      title: 'Vue Ninjas',
      methods: {
        updateTitle: function (event) {
          this.title = event
        }
      }
    }
  }
}
</script>
