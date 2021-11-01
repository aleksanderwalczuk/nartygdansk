<script>
import { computed } from '@vue/reactivity'

export default {
  props: ['news'],
  data() {
    return {
      show: false,
      show_text: 'Show',
      title: 'Post title',
      exerpt: computed(() => {
        return this.data.content.substring(0, 40) + '...'
      })
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <figure class="shadow-sm rounded-lg border p-4 mb-12 md:w-1/3">
    <datocms-image :data="data.image.responsiveImage" class="max-h-[150px]" />
    <h3 v-if="data.title" class="font-sans text-lg mt-2 mb-1">{{ data.title }}</h3>
    <figcaption>
      {{ exerpt }}
      <a href="#" class="block text-red-500">Czytaj&nbsp;więcej</a>
    </figcaption>
  </figure>
</template>