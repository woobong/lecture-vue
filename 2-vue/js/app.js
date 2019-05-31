import SearchModel from "./models/SearchModel.js";

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        selectedTab: '',
        tabs: ['추천 검색어', '최근 검색어'],
        searchResult: [],
        keywords: [],
    },
    created() {
        // 생성 라이프 사이클
        this.selectedTab = this.tabs[0]
    },
    methods: {
        onSubmit(e) {
            this.search();
        },
        onReset(e) {
            this.resetForm()
        },
        onKeyup(e) {
            if (!this.query.length) this.resetForm()
        },
        onClickTab(tab) {
            this.selectedTab = tab
        },
        resetForm() {
            this.query = ''
            this.searchResult = []
            this.submitted = false
        }, search() {
            SearchModel.list().then(data => {
                this.searchResult = data
                this.submitted = true
            })
        }
    }
})
