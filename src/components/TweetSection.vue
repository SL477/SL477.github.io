<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="tweet_section">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>