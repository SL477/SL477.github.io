// Updated to change from Vue to normal JS and remove Axios
let topic_list = [];
let users = [];
fetch('https://forum-proxy.freecodecamp.rocks/latest')
    .then(response => response.json())
    .then(data => {
        topic_list = data.topic_list;
        users = data.users;
    })
    .then(() => {
        const topicsTBody = document.getElementById('topics');
        if (topicsTBody) {
            topic_list.topics.forEach(topic => {

                const topicRow = document.createElement('tr');
                const topicLinkTd = document.createElement('td');
                const topicLinkA = document.createElement('a');
                topicLinkA.href = `https://forum.freecodecamp.org/t/${topic.slug}/${topic.id}`;
                topicLinkA.textContent = topic.id;
                topicLinkTd.appendChild(topicLinkA);
                topicRow.appendChild(topicLinkTd);

                const topicTitle = document.createElement('td');
                topicTitle.textContent = topic.title;
                topicRow.appendChild(topicTitle);

                // get the users
                const topicUsers = document.createElement('td');
                topic.posters.forEach(user => {
                    const usrIndex = users.findIndex(u => u.id == user.user_id);
                    if (usrIndex > -1) {
                        const userLink = document.createElement('a');
                        userLink.href = `https://forum.freecodecamp.org/u/${users[usrIndex].username}`;

                        const usrImg = document.createElement('img');
                        usrImg.className = 'usrImg';
                        let lnk = users[usrIndex].avatar_template;

                        if (lnk.startsWith('/')) {
                            lnk = 'https://sjc1.discourse-cdn.com/freecodecamp' + lnk;
                        }
                        lnk = lnk.replace('{size}','120');
                        usrImg.src = lnk;
                        usrImg.alt = users[usrIndex].username;
                        userLink.appendChild(usrImg);

                        topicUsers.appendChild(userLink);
                    }
                });
                topicRow.appendChild(topicUsers);

                // reply count
                const topicReplyCountTd = document.createElement('td');
                topicReplyCountTd.textContent = topic.reply_count;
                topicRow.appendChild(topicReplyCountTd);

                // views
                const topicViews = document.createElement('td');
                topicViews.textContent = topic.views;
                topicRow.appendChild(topicViews);

                // last posted
                const topicLastPostedTd = document.createElement('td');
                const topicLastPostedTime = document.createElement('time');
                topicLastPostedTime.dateTime = topic.last_posted_at;
                topicLastPostedTime.textContent = topic.last_posted_at;
                topicLastPostedTd.appendChild(topicLastPostedTime);
                topicRow.appendChild(topicLastPostedTd);

                topicsTBody.appendChild(topicRow);
            });
        }
    })
    .catch(ex => {
        console.error(ex);
    });
