Vue.filter('globalLocaleNum', function (val) {
    return val.toLocaleString()
})

let app = new Vue({
    el: '#app',
    data: {
        width: 800,
        height: 600,
        budget: 1500,
        limit: 3,
        list: [
            {id: 1, name: '사과', price: 3000},
            {id: 2, name: '바나나', price: 500},
            {id: 3, name: '딸기', price: 2000},
            {id: 4, name: '오렌지', price: 500},
            {id: 5, name: '귤', price: 300},
            {id: 6, name: '배', price: 5000},
            {id: 7, name: '키위', price: 1100},
            {id: 8, name: '참외', price: 900},
            {id: 9, name: '수박', price: 8800},
            {id: 10, name: '포도', price: 700},
            {id: 11, name: '석류', price: 500},
            {id: 12, name: '아보카도', price: 1000},
        ],
        order: false,
        list2: [],
        current: '',
        topics: [
            {value: 'vue', name: 'Vue.js'},
            {value: 'jQuery', name: 'jQuery'},
        ],
        price: 19800
    },
    filters: {
        localeNum: function (val) {
            return val.toLocaleString()
        },
        divideWon: function(val, num) {
            console.log(val, num)
            if (num === 1000) {
                return val / num + "천"
            }
            if (num === 10000) {
                return val / num + "만"
            }
        },
        round: function(val) {
            return Math.round(val * 100) / 100
        },
        radian: function(val) {
            return val * Math.PI / 180
        }
    },
    computed: {
        halfWidth: {
            get: function () {
                return this.width / 2
            },
            set: function (val) {
                this.width = val * 2
            }
        },
        halfHeight: function () {
            return this.height / 2
        },
        halfPoint: function () {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        computedData: function () {
            return Math.random()
        },
        matched: function () {
            // budget 데이터로 아래의 리스트를 리턴하는 산출 속성
            return this.list.filter(function (el) {
                return el.price <= this.budget
            }, this)
        },
        sorted: function () {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        limited: function () {
            // matched 산출 데이터를 limit 조건을 걸어 리턴하는 산출 속성
            return this.sorted.slice(0, this.limit)
        },
        filteredList: function () {
            return this.limited
        }
    },
    watch: {
        list: {
            handler: function (newVal, oldVal) {
                console.log(newVal, oldVal)
            },
            deep: true,
            immediate: true
        },
        current: function (val) {
            axios.get('https://api.github.com/search/repositories', {
                params: {q: 'topic: ' + val}
            }).then(function (response) {
                console.log(response)
                this.list2 = response.data.items
            }.bind(this))
        }
    },
    methods: {
        methodsData: function () {
            return Math.random()
        }
    }
});
