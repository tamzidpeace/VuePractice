var app = new Vue({
    el: '#app',
    data: {
        title: 'Learn Vue',
        value: 'abc',
    },
    methods: {
        getRef: function () {
            let ref = this.$refs;
            let new_value = ref.input.value;
            this.value = new_value;
            console.log(ref.input.value);
        }
    }
})