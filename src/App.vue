<script setup>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import { provide } from '@vue/runtime-core';

import { request } from "./datocms";
import { onMounted, reactive } from "vue";
import { ALL_IN_ONE_QUERY } from './Queries';
import Store from './store'



onMounted(async () => {
  const data = await request({
    query: ALL_IN_ONE_QUERY,
    variables: { limit: 3 },
  });
  Store.setData(data)
});




</script>

<template>
  <Header />
  <div v-if="Store.state.loaded" class="wrapper">
    <Home />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  @apply flex flex-col min-h-screen font-serif;
}
.container {
  max-width: 1180px;
  margin: 0 auto;
}
.section {
  @apply py-12;
}
.section-title {
  @apply font-sans text-3xl text-center mb-8;
}
</style>
