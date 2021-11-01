<script>
import Store from '../store'

export default {
  name: 'Hero',
  data() {
    return {
      section: '',
      subtitle: 'Hero subtitle',
      buttonText: 'Hero button',
      buttonLink: '#'
    }
  },
  mounted() {
    this.section = Store.getData('hero')
    console.log(this.section)
  }
}
</script>
<template>
  <section class="section pt-6" id="main">
    <div v-if="section" class="container px-4 flex flex-col lg:flex-col-reverse justify-center items-center">
      <div class="image-wrapper">
        <img :src="section.heroImg.responsiveImage.src" :srcset="section.heroImg.responsiveImage.srcSet" :alt="section.heroImg.alt" class="max-w-full mx-auto object-cover">
      </div>
      <div class="content">
        <div class="w-full py-4">
          <h2 class="text-4xl font-sans text-red-500 mb-8">{{ section.title }}</h2>
          <p class="">{{ 'subtitle' }}</p>
        </div>
        <div class="flex justify-center items-center mb-4">Otwarte od...</div>
        <button class="block px-16 py-4 border border-red-500 mx-auto lg:mb-8">Zadzwoń</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-wrapper {
  @apply -mx-4;
}
.content {
  @apply mt-4 text-center;
}
</style>
