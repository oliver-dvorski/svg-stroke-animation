import Vue from 'vue'

let app = new Vue({
    'el': '#app',
    data: {
        paths: []
    },
    methods: {
        activate() {
            document.querySelector('svg').classList = "w-64 h-64 text-grey-darker"
            this.paths.forEach((item) => {
                item.el.style.strokeDashoffset = 0
            })
        }
    },
    mounted() {
        let paths = document.querySelectorAll('path')
        paths.forEach((item) => {
            this.paths.push({
                el: item,
                length: item.getTotalLength()
            })
            let length = item.getTotalLength()
            item.style.strokeDasharray = length
            item.style.strokeDashoffset = - length
        })
    }
})
