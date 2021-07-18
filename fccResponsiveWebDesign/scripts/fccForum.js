let app = new Vue({
    el: '#app',
    data: {
        topic_list: {},
        users: []
    },
    methods: {
        getTopic(topic) {
            return `https://forum.freecodecamp.org/t/${topic.slug}/${topic.id}`;
        },
        getUser(userid) {
            return this.users.findIndex(u => u.id == userid);
        },
        getUserLink(user) {
            let usrIndex = this.getUser(user.user_id);
            return `https://forum.freecodecamp.org/u/${this.users[usrIndex].username}`;
        },
        getUserName(user) {
            let usrIndex = this.getUser(user.user_id);
            return this.users[usrIndex].username;
        },
        getUserImg(user) {
            let usrIndex = this.getUser(user.user_id);
            let lnk = this.users[usrIndex].avatar_template;
            let s = '';
            if (lnk.startsWith("/")) {
                lnk = 'https://sjc1.discourse-cdn.com/freecodecamp' + lnk;
            }
            lnk = lnk.replace('{size}','120');
            return lnk;
        }
    },
    mounted() {
        axios
        .get('https://forum-proxy.freecodecamp.rocks/latest')
        .then(response => {
            console.log('response', response);
            //this.forum = response.data;
            this.topic_list = response.data.topic_list
            this.users = response.data.users;
        })
        .catch(error => {
            console.error(error);
        });
    }
});