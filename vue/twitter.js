Vue.component('tweet-message', {
    props: {
        'tweet': Object
    },
    template: `
    <div class="tweetMsg">
        <p>{{tweet.tweet}}</p>
        <div class="tweetDate">
            <i class="fas fa-calendar-alt fa-sm fa-fw"></i>{{tweet.date}}
        </div>
        <div class="tweet_remove" @click="$emit('removeTweet', index)">
            <span class="remove">Delete this tweet <i class="fas fa-trash fa-fw"></i></span>
        </div>
    </div>
    `
});

let app = new Vue({
    el: '#app',
    data: {
        userData: {},
        usersID: 0,
        name: "",
        email: "",
        password: "",
        max_length: 25,
        max_pass_length: 16,
        error: "",
        registered: false,
        tweetMsg: "",
        max_tweet: 200,
        tweets: []
    },
    mounted(){
        /* Check if the user is registered and set the registered to true */
        if (localStorage.getItem("simple_tweet_registered") == 'true'){
            this.registered = true;
        }
        // repopulate the userData object
        if(localStorage.getItem('simple_tweet_registered_user')) {
            this.userData = JSON.parse(localStorage.getItem('simple_tweet_registered_user'))
        }
       //console.log('mounted', localStorage.getItem("simple_tweet_registered"));
       if (localStorage.getItem('simple_tweet_tweets')) {
           this.tweets = JSON.parse(localStorage.getItem('simple_tweet_tweets'))
       }
    },
    methods: {
        registerAccount() {
            if (this.name !== "" && this.email !== "" && this.password !== "") {
                //record user details
                this.userData.id = ++this.userData.id;
                this.userData.name = this.name;
                this.userData.email = this.email;
                this.userData.password = this.password;
                //add registration to localstorage
                localStorage.setItem('simple_tweet_registered', true);
                /*Add the whole userdata object as json string*/ 
                localStorage.setItem('simple_tweet_registered_user', JSON.stringify(this.userData));
                //clear the registration fields
                this.name = "";
                this.email = "";
                this.password = "";
                this.registered = true;
            }
            else {
                this.error = "Complete all the form fields";
            }
        },
        sendTweet() {
            //Store the tweet in the tweets property
            this.tweets.unshift(
                {
                    tweet: this.tweetMsg,
                    date: new Date().toLocaleTimeString()
                }
            );
            this.tweetMsg = "";

            //Transfor the object into a string
            let stringTweets = JSON.stringify(this.tweets);

            //Add to the local storage the stringified tweet object
            localStorage.setItem('simple_tweet_tweets',stringTweets);
        },
        removeTweet(index) {
            let removeIt = confirm("Are you sure you want to remove this tweet?");
            if (removeIt) {
                this.tweets.splice(index, 1);
                //Update local storage
                localStorage.simple_tweet_tweets = JSON.stringify(this.tweets);
            }
        }
    },
    computed: {
        nameChars:function(){
            return '(' + this.name.length + '/' + this.max_length + ')';
        },
        emailChars:function() {
            return '(' + this.email.length + '/' + this.max_length + ')';
        },
        passwordChars:function() {
            return '(' + this.password.length + '/' + this.max_pass_length + ')';
        },
        tweetChars:function() {
            return '(' + this.tweetMsg.length + '/' + this.max_tweet + ')';
        }
    }
});