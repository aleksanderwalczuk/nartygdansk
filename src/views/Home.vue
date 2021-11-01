<script>
import Hero from '../components/Hero.vue';
import News from '../components/News.vue';
import NewsItem from '../components/NewsItem.vue';
import Terms from '../components/Terms.vue';
import Contact from '../components/Contact.vue';

import Store from '../store';

export default {

  components: {
    Hero,
    News,
    NewsItem,
    Terms,
    Contact
  },
};
</script>
<template>
  <Hero />
  <hr />
  <News>
    <NewsItem />
    <NewsItem />
  </News>
  <hr />
  <Terms />
  <hr />
  <Contact class="mt-12" />
</template>