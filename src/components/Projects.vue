<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';

const dataObject = reactive({
  projects: [],
  projectsList: null,
  skills: [],
  projectsCount: 5,
  perPage: 20,
  page: 1,
  loading: true,
  errors: false
});

interface OwnerObj {
  avatar_url: string;
}

interface ProjectObj {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  language: string;
  name: string;
  open_issues: number
  open_issues_count: number;
  owner: OwnerObj;
  private: boolean;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
}

const projectsList = ref<ProjectObj[]>([]);

const projects = ref<ProjectObj[]>([]);

const skills = ref<string[]>([]);

onMounted(() => {
  fetch(`https://api.github.com/users/SL477/repos?per_page=${dataObject.perPage}&page=${dataObject.page}`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      projects.value = response;
      projects.value.forEach(project => {
        if (project.language !== null && !skills.value.includes(project.language)) {
          skills.value.push(project.language);
        }
      });
    })
    .catch(err => {
      console.error(err);
      dataObject.errors = true;
    })
    .finally(() => {
      dataObject.loading = false;
      getProjects();
    });
});

const getProjects = () => {
  projectsList.value = projects.value.slice(0, dataObject.projectsCount);
  return projectsList.value;
};

const loadMore = () => {
  if (projectsList.value.length <= projects.value.length) {
    dataObject.projectsCount += 5;
    projectsList.value = projects.value.slice(0, dataObject.projectsCount);
  }
};
</script>

<template>
  <main class="container">
    <div class="error" v-if="dataObject.errors">
      Sorry! It seems we can't fetch data right now 😥
    </div>

    <section v-else>
      <!--Loading-->
      <div class="loading" v-if="dataObject.loading">😴 Loading ...</div>
      <div v-for="project in projectsList" v-else>
        <h3 class="title">{{ project.name }}</h3>
        <p>{{ project.description }}</p>

        <div class="meta__data d_flex">
          <div class="date">
            <h5>Updated at</h5>
            <div>{{ new Date(project.updated_at).toDateString() }}</div>
          </div>
          <img class="avatar" :src="project.owner.avatar_url" alt="me" height="50" width="50" />
        </div>

        <div class="card__custom_img"></div>
        <div class="card_custom_button">
          <a :href="project.html_url" target="_blank">Code</a>
        </div>
      </div>
      <!--Load more-->
      <div style="text-align: center; width: 100%;" v-if="!dataObject.loading">
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
          <li v-for="skill in skills">{{ skill }}</li>
        </ul>
      </div>
    </section>
  </main>
</template>