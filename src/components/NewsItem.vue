<script>
export default {
  props: ['news'],
  data() {
    return {
      show: false,
      show_text: 'Show',
      title: 'Post title',
      exerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut molestiae alias repudiandae, iusto vero dolore cupiditate id voluptatum est...',
    }
  }
}
</script>
<template>
  <figure class="shadow-sm rounded-lg border p-4 mb-12 md:w-1/3">
    <img
      src="https://via.placeholder.com/300x300"
      alt="Placeholder"
      class="block w-full object-cover mx-auto mb-2"
    />
    <h3 v-if="title" class="font-sans text-lg mb-1">{{ title }}</h3>
    <figcaption>{{ exerpt }} <a href="#" class="text-red-500">Czytaj&nbsp;więcej</a></figcaption>
  </figure>
</template>