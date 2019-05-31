var state = {count: 0}
var app = new Vue({
    el: '#app',
    data: {
        show: true,
        message: "헬로우 Vue.js",
        html_message: "Hello <strong>헬로우 Vue.js</strong>",
        text: "Vue.js",
        state: state,
        radius: 50,
        monster_list: [],
        name: "",
        url: "https://ko.vuejs.org/"
    },
    computed: {
        computedMessage: function () {
            console.log("computed message")
            return this.message + '!!'
        }
    },
    mounted: function () {
        console.log(this.$el)
        console.log(this.$refs)
        console.log(this.$refs.hello)
    },
    created: function () {
        // console.log("life cycle : created")
        // this.monster_list.forEach(item => {
        //     this.$set(item, 'active', false)
        // }, this)

        axios.get('list.json').then(function (response) {
            this.monster_list = response.data
        }.bind(this)).catch(function (e) {
            console.error(e)
        })

        this.monster_list.forEach(function (item) {
            this.$set(item, 'active', false)
        }, this)

        this.url = "https://google.com"
    },
    methods: {
        doAdd: function () {
            // 리스트 내부에서 가장 큰 ID 추출하기
            var max = this.monster_list.reduce(function (a, b) {
                return a > b.id ? a : b.id
            }, 0)

            // 새로운 몬스터를 리스트에 추가하기
            this.monster_list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function (index) {
            this.monster_list.splice(index, 1)
        },
        doAttack: function (index) {
            this.monster_list[index].hp -= 10
            if (this.monster_list[index].hp <= 0) {
                this.doRemove(index)
            }
        }
    }

});
state.count++
state.count++
state.count++
state.count++
