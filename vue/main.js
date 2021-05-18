let userAge = Number(prompt("What's your age?"));
let dataObject = {
    alert: "This is an alert message!",
    title: "Test portfolio",
    titleHTML:"Test <span class='badge'>Portfolio</span>",
    projects: [
        {title: "portfolio", languages: ["HTML","CSS","VueJS"]},
        {title: "grocery shop", languages: ["HTML","CSS","PHP"]},
        {title: "blog", languages: ["HTML","CSS","PHP"]},
        {title: "automation script", languages: ["python"]},
        {title: "eCommerce", languages: ["HTML","CSS","PHP"]},
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
    age: userAge
};

let methodObject = {
    runFunction() {
        console.log("Test Click Function", this.firstName, this.lastName);
    },
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
};

let app = new Vue({
    //options object
    el: "#app",
    data: dataObject,
    methods: methodObject
});