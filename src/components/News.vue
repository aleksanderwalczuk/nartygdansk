<script>
import Store from '../store'
import NewsItem from './NewsItem.vue'

export default {
  name: "News",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.posts = Store.getData("allPosts")

  },
  components: { NewsItem }
}
</script>
<template>
  <section class="section" id="news">
    <div class="container px-4">
      <div class="news__header">
        <h2 class="section-title">Aktualności</h2>
      </div>
      <div class="content">
        <template v-for="post in posts">
          <NewsItem v-if="post" :fetched="post" :key="post.id" />
        </template>
      </div>
      <button class="block text-center mx-auto">Załaduj więcej</button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@screen md {
  .content {
    @apply flex justify-around;
  }
}
</style>
