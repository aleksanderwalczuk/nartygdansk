<script>
import Logo from '../assets/logo.png'

export default {
  name: 'Loader',
  data() {
    return {
      Logo
    }
  },
}
</script>

<template>
  <div class="flex flex-col min-h-full w-full items-center justify-center px-4">
    <img :src="Logo" alt />
    <p class="font-serif">Wczytuję...</p>
  </div>
</template>