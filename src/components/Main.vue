<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import TestComponent from './TestComponent.vue';
import TweetSection from './TweetSection.vue';
import TweetMessage from './TweetMessage.vue';
const dataObject = reactive({
  title: "This is an alert message!",
  titleHTML: "Test <span class='badge'>Portfolio</span>",
  projects: [
    { title: "portfolio", languages: ["HTML", "CSS", "VueJS"], likes: 0 },
    { title: "grocery shop", languages: ["HTML", "CSS", "PHP"], likes: 0 },
    { title: "blog", languages: ["HTML", "CSS", "PHP"], likes: 0 },
    { title: "automation script", languages: ["python"], likes: 0 },
    { title: "eCommerce", languages: ["HTML", "CSS", "PHP"], likes: 0 },
  ],
  dynamicId: "projects_section",
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
  max_length: 200
});

const tweet = ref("");
const tweets = ref<string[]>([]);

const maxCharsText = computed(() => {
  return `Max: ${tweet.value.length} of ${dataObject.max_length} characters`;
});

const errorMessage = computed(() => {
  return `Max char limit reached! Excess chars: ${dataObject.max_length - tweet.value.length}`;
});

const getFullName = () => {
  return `${dataObject.firstName} ${dataObject.lastName}`;
};

const runFunction = () => {
  console.log("Test Click Function", dataObject.firstName, dataObject.lastName);
};

interface ProjectObj {
  title: string;
  languages: string[];
  likes: number;
}

const likeProject = (project: ProjectObj) => {
  if (!localStorage.getItem(project.title)) {
    project.likes++;
    localStorage.setItem(project.title, "1");
  }
};

const removeLike = (project: ProjectObj, event: MouseEvent) => {
  event.preventDefault(); //This can be omitted if we use the prevent key modifier
  if (project.likes > 0 && localStorage.getItem(project.title)) {
    project.likes--;
    localStorage.removeItem(project.title);
  }
};

const submitData = () => {
  if (tweets.value.length <= dataObject.max_length) {
    tweets.value.unshift(tweet.value);
    tweet.value = "";
  }
};

onMounted(() => {
  dataObject.projects.forEach(project => {
    if (localStorage.getItem(project.title) !== null) {
      project.likes = 1;
    }
  });
});
</script>

<template>
  <h2>{{ dataObject.title }}</h2>
  <div class="title">{{ dataObject.title }}</div>
  <div v-html="dataObject.titleHTML"></div>
  <div v-bind:class="dataObject.dynamicClass" v-bind:id="dataObject.dynamicId">Dynamically assign a class and an ID to
    the div</div>
  <button v-bind:disabled="dataObject.disabled" class="btn btn-primary">You can't click this button</button><br />
  <a v-bind:[dataObject.attribute_name]="dataObject.url">Visit my website</a><br />
  <a v-on:[dataObject.event_name]="runFunction">Some link</a><br />
  <div>{{ getFullName() }}</div>
  <label for="age">What is your age?</label>
  <input type="number" v-model="dataObject.age" class="form-control" id="age" />
  <h2 v-if="dataObject.age > 21">{{ dataObject.movieTitle }}</h2>
  <h2 v-else-if="dataObject.age > 18">{{ dataObject.movieTitle }} | Watch with an adult</h2>
  <p v-else>Sorry you are too young to see this movie</p>
  <ul>
    <li v-for="(project, index) in dataObject.projects" :key="index">{{ project.title }}</li>
  </ul>

  <div class="projects" v-for="(project) in dataObject.projects">
    <h1>{{ project.title.toUpperCase() }}</h1>
    <input type="text" v-model="project.title" aria-label="project title" class="form-control" />
    <p>Lorem ipsum dolor sit amet.</p>
    <div>Like
      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click.left="likeProject(project)"
        @click.right.prevent="removeLike(project, $event)">
        <path
          d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
      </svg>
      {{ project.likes }}
    </div>
  </div>

  <h2>What do you want to tweet about today?</h2>
  <form v-on:submit.prevent="submitData">
    <div class="form_group">
      <label for="tweet">Tweet:</label>
      <textarea id="tweet" name="tweet" v-model="tweet" placeholder="What's happening today?" class="form-control"
        cols="80" rows="10" maxlength="200"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Tweet</button>
  </form>
  <!--<div>
        <span v-if="tweet.length <= max_length">{{ `Max: ${tweet.length} of ${max_length} characters` }}</span>
        <span class="errorMessage" v-else>{{ `Max char limit reached! Excess chars: ${max_length - tweet.length}` }}</span>
    </div>-->
  <div>
    <span v-if="tweet.length <= dataObject.max_length">{{ maxCharsText }}</span>
    <span class="errorMessage" v-else>{{ errorMessage }}</span>
  </div>
  <ul>
    <li v-for="text in tweets">{{ text }}</li>
  </ul>
  <TestComponent></TestComponent>
  <TweetMessage text="This is a component" date="25/12/2020"></TweetMessage>

  <TweetSection title="Latest Tweets">
    <TweetMessage text="This is my first tweet"></TweetMessage>
    <TweetMessage text="This is my second tweet"></TweetMessage>
    <TweetMessage text="This is my third tweet"></TweetMessage>
    <TweetMessage text="This is my fourth tweet"></TweetMessage>
  </TweetSection>
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
}
</style>