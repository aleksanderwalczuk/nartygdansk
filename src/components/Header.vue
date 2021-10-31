<script>


export default {
  data() {
    return {
      mapUrl: 'https://www.google.com/maps/dir//nartygdansk.pl/data=!4m8!4m7!1m0!1m5!1m1!1s0x46fd0ac835ce2f91:0x6ef6191e630f3f6d!2m2!1d18.5607063!2d54.418360899999996',
      phoneNumber: 'tel:' + '004800000000'
    }
  }
}
</script>
<template>
  <header class="page-header">
    <div class="container flex justify-between items-center px-4 min-h-[56px]">
      <div class="logo">
        <h1 class="font-sans">
          <router-link to="/nartygdansk">nartygdansk.pl</router-link>
        </h1>
      </div>
      <div class="links">
        <a href="#" class>Home</a>
        <a :href="phoneNumber">Zadzwoń teraz</a>
        <a :href="mapUrl" target="blank">Wyznacz trasę</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  @apply shadow-md;
}
.logo {
  @apply text-2xl text-red-500;
}
.links {
  @apply font-serif text-lg hidden sm:block;
}
.links a {
  @apply text-red-600 font-medium px-2 mx-2;
}
.links a:last-child {
  @apply mr-0;
}
</style>
