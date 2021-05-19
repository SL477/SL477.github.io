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
        /*if (localStorage.getItem("simple_tweet_registered") == 'true'){
            this.registeredd = true;
        }*/
        // repopulate the userData object
        //if(localStorage.getItem('simple_tweet_registered_user')) {
           // this.userData = JSON.parse(localStorage.getItem('simple_tweet_registered_user'))
        //}
        //this.name = 't';
        //this.registeredd = true;
       console.log('mounted', localStorage.getItem("simple_tweet_registered"));
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
            return '(' + this.tweetChars.length + '/' + this.max_tweet + ')';
        }
    }
    /*created() {
        /* Check if the user is registered and set the registered to true */
       // console.log(localStorage.getItem("simple_tweet_registered"));
        /*if (localStorage.getItem("simple_tweet_registered") === 'true') {
            
        }*/
        //this.registered = true;
        //Repopulated the userData object
        /*if (localStorage.getItem("simple_tweet_registered_user")) {
            this.userData = JSON.parse(localStorage.getItem("simple_tweet_registered_user"));
        }*/

        /*if (localStorage.getItem("simple_tweet_tweets")) {
            this.tweets = JSON.parse(localStorage.getItem('simple_tweet_tweets'));
        }
        else {
            console.log("No tweets here");
        }*/
    //}*/
});