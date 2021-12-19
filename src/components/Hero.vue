<script>
import { computed } from '@vue/reactivity'
import Store from '../store'

export default {
  name: 'Hero',
  data() {
    return {
      section: '',
      subtitle: 'Hero subtitle',
      buttonText: 'Hero button',
      buttonLink: '#',
      info: null,
      isTodayOpen: computed(() => {
        const query = Store.getData('info')
        const dateObj = new Date();
        const weekday = dateObj.toLocaleString("default", { weekday: "long" })
        const closedMessage = 'zamknięte.'
        if (query) {
          const [[day, message]] = Object
            .entries(query)
            .filter(([key, value]) => key.toLocaleLowerCase().includes(weekday.toLocaleLowerCase()))

          return message.includes(closedMessage) ? 'Dziś' + message.toLocaleLowerCase() : `Dziś otwarte ${message}`
        }
        return ''
      })
    }
  },
  mounted() {
    this.section = Store.getData('hero')

  },
}
</script>
<template>
  <section class="section pt-0" id="main">
    <div
      v-if="section"
      class="container px-4 flex flex-col justify-center items-center"
    >
      <div
        v-if="section.heroImg"
        class="image-wrapper px-4">
        <datocms-image
          :data="section.heroImg.responsiveImage"
          class="max-w-full mx-auto object-cover"
        />
      </div>
      <div class="content">
        <div class="w-full pb-4">
          <h2 class="text-4xl font-sans text-red-500 mb-8">{{ section.title }}</h2>
          <p class>{{ section.subtitle }}</p>
        </div>
        <div class="flex justify-center items-center mb-4">{{ isTodayOpen }}</div>
        <a href="tel:508485690" class="btn btn-lg mx-auto lg:mb-8 inline-block">Zadzwoń</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-wrapper {
  @apply -mx-4;
}
.content {
  @apply mt-4 text-center md:mt-0 md:py-4;
}
</style>
