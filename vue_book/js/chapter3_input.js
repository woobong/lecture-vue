var state = {count: 0}
var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    data: {
        msg: 'template',
        val: 'yes',
        val2: ['B', 'C'],
        radio1: 'B',
        sel1: '',
        sel2: [],
        preview: '',
        range1: 50,
        lazy1: 'lazy test',
        scrollY: 0,
        timer: null,
    },
    created: function () {
        //핸들러 등록하기
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function () {
        // 핸들러 제거하기(컴포넌트 또는 SPA의 경우 절대 잊지 말아주세요!)
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleChange: function (event) {
            let file = event.target.files[0]
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        },
        handleScroll: function () {
            if (this.timer === null) {
                this.timer = setTimeout(function () {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 200)
            }
        },
        scrollTop: function() {
            scroll.animateScroll(0)
        }
    }
});
