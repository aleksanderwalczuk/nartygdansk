<script>
import Hero from '../components/Hero.vue';
import News from '../components/News.vue';
import NewsItem from '../components/NewsItem.vue';
import Terms from '../components/Terms.vue';
import Contact from '../components/Contact.vue';
import VueEasyLightbox from 'vue-easy-lightbox' // work

export default {

  data() {
    return {
      lightbox: {
        visible: false,
      },
    }
  },
  components: {
    Hero,
    News,
    NewsItem,
    Terms,
    Contact,
    VueEasyLightbox
  },
  methods: {
    openLightbox(index) {
      this.lightbox.visible = true;
      this.lightbox.index = index;
    },
    closeLightbox() {
      this.lightbox.visible = false;
    },
  },
};
</script>
<template>
  <Hero />
  <hr />
  <News />
  <hr />
  <Terms />
  <hr />
  <Contact class="mt-12" />
  <vue-easy-lightbox :visible="lightbox.visible" @hide="closeLightbox"/>
</template>