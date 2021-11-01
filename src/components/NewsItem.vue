<script>
import { computed } from '@vue/reactivity'
import Modal from './Modal.vue'
import Store from '../store';

export default {
  props: ["news"],
  components: {
    Modal
  },
  data() {
    return {
      open: false,
      title: "Post title",
      exerpt: computed(() => {
        return this.fetched.content.substring(0, 40) + "...";
      })
    };
  },
  props: {
    fetched: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
      Store.toggleScrollLock();
    }
  }
}
</script>
<template>
  <figure class="shadow-sm rounded-lg border p-4 mb-12 md:w-1/3 max-w-xs">
    <datocms-image :data="fetched.image.responsiveImage" class="max-h-[150px]" />
    <h3 v-if="fetched.title" class="font-sans text-lg mt-2 mb-1">{{ fetched.title }}</h3>
    <figcaption>
      {{ exerpt }}
      <button to="#modals" @click="toggle" class="block text-red-500">Czytaj&nbsp;więcej</button>
    </figcaption>
  </figure>
  <teleport to="#modals" :disabled="!open">
    <Modal :onOpen="open" :toggle="toggle.bind(this)">
      <template v-slot:header>
        <h3 class="font-sans text-lg">{{ fetched.title }}</h3>
      </template>
      <template v-slot:body>
        <datocms-image :data="fetched.image.responsiveImage" class="max-h-[250px]" />
        <div class="font-serif mt-4">
          <div v-html="fetched.content"></div>
        </div>
      </template>
    </Modal>
  </teleport>
</template>

<style scoped>
</style>
