<script setup lang="ts">
import { reactive } from 'vue';
defineProps<{
  text: String,
  date?: String
}>();

const dataObject = reactive({
  tweetBoxWrapper: "tweet-message",
  dateClass: "tweet-date",
  now: new Date().toDateString()
});
</script>

<template>
  <div :class="dataObject.tweetBoxWrapper">
    <p>{{ text }}</p>
    <p :class="dataObject.dateClass">{{ dataObject.now }}</p>
  </div>
</template>