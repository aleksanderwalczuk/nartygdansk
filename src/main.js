import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { DatocmsImagePlugin } from "vue-datocms";
import VueEasyLightbox from 'vue-easy-lightbox'

import './index.css'

createApp(App)
  .use(router)
  .use(VueSmoothScroll, {
    offset: -55,
    duration: 1000,
    easing: 'easeInOutQuart',
  })
  .use(DatocmsImagePlugin)
  .use(VueEasyLightbox)
  .mount('#app')
