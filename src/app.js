import Vue from 'vue'

let app = new Vue({
    'el': '#app',
    data: {
        paths: [],
        active: false
    },
    computed: {
        buttonText() {
            return this.active ? 'Hide' : 'Show'
        }
    },
    methods: {
        activate() {
            document.querySelector('svg').classList = "w-64 h-64 text-grey-darker"
            this.paths.forEach((item) => {
                item.el.style.strokeDashoffset = 0
            })
            this.active = true
        },
        deactivate() {
            this.paths.forEach((item) => {
                item.el.style.strokeDashoffset = 0 - item.length
            })
            this.active = false
        },
        toggle() {
            if (this.active) {
                this.deactivate()
                return
            }
            this.activate()
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
