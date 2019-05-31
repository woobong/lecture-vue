var state = {count: 0}
var app = new Vue({
    el: '#app',
    data: {
        count : 0,
    },
    methods: {
        handleClick: function(e, i) {
            alert('클릭클릭!')
        }
    }
});
