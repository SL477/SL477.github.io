/* eslint-disable no-undef */
//Create route components
const Home = {template: `
    <main id="home">
        <div class="about_me">
            <h1>Title</h1>
            <h3>Stuff</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div class="skills_projects_link">
                <router-link to="/projects">Projects/Skills</router-link>
                <i class="fab fa-github fa-lg fa-fw"></i>
            </div>
        </div>
    </main>
`};
const Projects = {
    template: `
<main class="container">
    <div class="error" v-if="errors">
        Sorry! It seems we can't fetch data righ now 😥
    </div>
    <section v-else>
        <!--Loading-->
        <div class="loading" v-if="loading">😴 Loading ...</div>
        <div v-for="project in projectsList" v-else>
            <h3 class="title">{{project.name}}</h3>
            <p>{{project.description}}</p>
            <div class="meta__data d_flex">
                <div class="date">
                    <h5>Updated at</h5>
                    <div>{{new Date(project.updated_at).toDateString()}}</div>
                </div>
                <img class="avatar" :src="project.owner.avatar_url" alt="me"/>
            </div>
            <div class="card__custom_img"></div>
            <div class="card_custom_button">
                <a :href="project.html_url" target="_blank">Code</a>
            </div>
        </div>
        <!--Load more-->
        <div style="text-align: center; width: 100%;" v-if="!loading">
            <div v-if="projectsList.length < projects.length">
                <button class="btn btn-primary" v-on:click="loadMore()">Load More</button>
            </div>
            <div v-else>
                <a href="https://github.com/sl477" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
            </div>
        </div>
        <!--Skills section-->
        <div id="skills_section">
            <h2>Development Skills</h2>
            <ul class="skills">
                <li v-for="skill in skills">{{skill}}</li>
            </ul>
        </div>
    </section>
</main>`,
    data() {
        return {
            projects: [],
            projectsList: null,
            skills: [],
            projectsCount: 5,
            perPage: 20,
            page: 1,
            loading: true,
            errors: false
        };
    },
    methods: { 
        fetchData: function() {
            axios
                .get(`https://api.github.com/users/SL477/repos?per_page=${this.perPage}&page=${this.page}`)
                .then(
                    response => {
                        console.log(response);
                        this.projects = response.data;
                        this.projects.forEach(project => {
                            if (project.language !== null && !this.skills.includes(project.language)) {
                                this.skills.push(project.language);
                            }
                        });
                    }
                )
                .catch(error => {
                    console.error(error);
                    this.errors = true;
                })
                .finally(() => {
                    this.loading = false;
                    this.getProjects();
                });
        },
        getProjects: function() {
            this.projectsList = this.projects.slice(0, this.projectsCount);
            return this.projectsList;
        },
        loadMore: function() {
            if (this.projectsList.length <= this.projects.length) {
                this.projectsCount += 5;
                this.projectsList = this.projects.slice(0, this.projectsCount);
            }
        }
    },
    mounted() {
        this.fetchData();
    }
};

//Routes
const routes = [
    {path: '/', component: Home},
    {path: '/projects', component: Projects}
];

//Create the router instance and pass the routes to it
const router = new VueRouter({
    routes: routes
});

//create and mount the root instance
// eslint-disable-next-line no-unused-vars
let app = new Vue({
    router
}).$mount('#app');