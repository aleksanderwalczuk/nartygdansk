<script>
import Store from '../store';

export default {
  data() {
    return {
      terms: ''
    };
  },
  mounted() {
    this.terms = Store.getData("term")

  },
}
</script>
<template>
  <section v-if="terms" class="section bg-gray-100" id="terms">
    <div class="container px-4">
      <h2 class="section-title">Komis - warunki przyjęcia sprzętu</h2>
      <div class="pt-4 rendered-content" v-html="terms.terms"></div>
    </div>
  </section>
</template>

<style lang="scss">
#terms {
  li {
    @apply mb-4;
  }
  .rendered-content h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-sans;
  }
  .rendered-content h1 {
    @apply text-3xl;
  }
  .rendered-content h2 {
    @apply text-2xl;
  }
  .rendered-content h3 {
    @apply text-2xl;
  }
  .rendered-content h4 {
    @apply text-xl;
  }
  .rendered-content ol {
    @apply list-decimal;
  }
  .rendered-content strong,b {
    @apply font-semibold;
  }
}
</style>
