/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let app = new Vue({
    el: '#app',
    data: {
        projects: [],
        perPage: 20,
        page: 1
    },
    methods: {},
    mounted() {
        axios
            .get(`https://api.github.com/users/SL477/repos?per_page=${this.perPage}&page=${this.page}`)
            .then(
                response => {
                    console.log(response);
                    this.projects = response.data;
                }
            )
            .catch(error => {console.error(error);});
    }
});