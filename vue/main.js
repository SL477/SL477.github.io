//let userAge = Number(prompt("What's your age?"));
let dataObject = {
    alert: "This is an alert message!",
    title: "Test portfolio",
    titleHTML:"Test <span class='badge'>Portfolio</span>",
    projects: [
        {title: "portfolio", languages: ["HTML","CSS","VueJS"], likes: 0},
        {title: "grocery shop", languages: ["HTML","CSS","PHP"], likes: 0},
        {title: "blog", languages: ["HTML","CSS","PHP"], likes: 0},
        {title: "automation script", languages: ["python"], likes: 0},
        {title: "eCommerce", languages: ["HTML","CSS","PHP"], likes: 0},
    ],
    dynamicId : "projects_section",
    dynamicClass: "projects",
    disabled: true,
    attribute_name: "href",
    url: "https://link477.com",
    event_name: "click",
    firstName: "Tom",
    lastName: "Fishwick",
    showTitle: true,
    movieTitle: "Shining",
    age: 0,//userAge,
    tweet: "",
    tweets: [],
    max_length: 200
};

let methodObject = {
    runFunction() {
        console.log("Test Click Function", this.firstName, this.lastName);
    },
    getFullName() {
        return this.firstName + " " + this.lastName;
    },
    likeProject(project){
        /*const project = this.projects[index];
        project.likes++;
        console.log(project.likes);*/
        const projectTitle = project.title;
        if (!localStorage.getItem(projectTitle)) {
            project.likes++;
            localStorage.setItem(projectTitle, true);
        }
    },
    removeLike(project, event){
        //event.preventDefault();//This can be omited if we use the prevent key modifier
        const projectTitle = project.title;
        if (project.likes > 0 && localStorage.getItem(projectTitle)) {
            project.likes--;
            localStorage.removeItem(projectTitle);
        }
    },
    submitData() {
        if (this.tweet.length <= this.max_length) {
            this.tweets.unshift(this.tweet);
            this.tweet = "";
        }
    }
};

Vue.component('test-component', {
    // component properties here
    template: `<p>I am a component</p>`
});

Vue.component('tweet-message', {
    //props: ['text','date'],//array
    props: {
        text: String,
        date: String
    },
    template: `
    <div :class="tweetBoxWrapper">
        <p>{{text}}</p>
        <p :class="dateClass">{{now}}</p>
    </div>
    `,
    data() {
        return {
            //Data properties go here
            tweetBoxWrapper: "tweet-message",
            dateClass: "tweet-date",
            now: new Date().toDateString()
        };
    }
});

Vue.component('tweet-section',{
    props: {
        'title': String
    },
    template: `
        <div class="tweet_section">
            <h2>{{title}}</h2>
            <slot></slot>
        </div>
    `
});

let app = new Vue({
    //options object
    el: "#app",
    data: dataObject,
    methods: methodObject,
    mounted() {
        this.projects.forEach(project => {
            if (localStorage.getItem(project.title) !== null) {
                project.likes = 1;
            }
        });
    },
    //Computed properties
    computed: {
        maxCharsText: function() {
            return `Max: ${this.tweet.length} of ${this.max_length} characters`;
        },
        errorMessage: function() {
            return `Max char limit reached! Excess chars: ${this.max_length - this.tweet.length}`;
        }
    }
});

