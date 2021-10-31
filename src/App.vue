<script setup>
import Header from './components/Header.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <Header />
  <div class="wrapper">
    <router-view/>
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
