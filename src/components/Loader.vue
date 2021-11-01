<script>
import Logo from '../assets/logo.png'

export default {
  name: 'Loader',
  data() {
    return {
      Logo
    }
  },
  props: {
    loaded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template v-if="loaded !== true">
  <div class="flex min-h-full w-full items-center justify-center">
    <img :src="Logo" alt />
  </div>
</template>