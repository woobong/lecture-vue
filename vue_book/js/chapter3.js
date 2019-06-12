var state = {count: 0}
var app = new Vue({
    el: '#app',
    data: {
        count : 0,
        show: false,
        message: 'Hello Vue.js',
    },
    methods: {
        handleClick: function(e, i) {
            alert('클릭클릭!')
            this.show = false
        },
        handleInput: function(event) {
            this.message = event.target.value
        },
        handler: function(comment) {
            console.log(comment)
        }
    }
});
