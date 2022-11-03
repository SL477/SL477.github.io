/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars, no-undef
let app = new Vue({
    el: '#app',
    data: {
        acceleration: 9.78,
        distance: 100,
        hours: 0
    },
    methods: {
        calctime: function(event) {
            this.hours = (Math.sqrt((2 * this.distance * 1000) / this.acceleration)) / 60 / 60;
        },
        calcdist: function(event) {
            this.distance = 0.5 * this.acceleration * Math.pow(this.hours * 60 * 60, 2);
        }
    },
    mounted() {

    }
});