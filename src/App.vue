<script setup>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import Loader from './components/Loader.vue';

import { request } from "./datocms";
import { onMounted } from "vue";
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
  <transition name="fade" :duration="{ enter: 500, leave: 250 }">
    <div v-if="Store.state.loaded" class="wrapper">
      <Home />
    </div>
    <Loader v-else />
  </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.btn {
  @apply bg-red-500 text-lg font-medium font-serif text-white py-2 px-4 rounded border border-red-400 transition-colors duration-300 hover:bg-red-400;
}
.btn-lg {
  @apply px-8;
}
@screen lg {
  .wrapper .container {
    @apply px-12;
  }
}
</style>
