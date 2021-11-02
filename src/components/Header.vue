<script>
import Hamburger from "./Hamburger.vue"


export default {
    data() {
        return {
            mapUrl: "https://www.google.com/maps/dir//nartygdansk.pl/data=!4m8!4m7!1m0!1m5!1m1!1s0x46fd0ac835ce2f91:0x6ef6191e630f3f6d!2m2!1d18.5607063!2d54.418360899999996",
            phoneNumber: "tel:" + "004800000000"
        };
    },
    components: { Hamburger }
}
</script>
<template>
  <header class="page-header pt-14">
    <div class="flex items-center w-full min-h-[56px] fixed top-0 left-0 shadow-md bg-white z-20">
      <div class="container flex justify-between items-center px-4">
        <div class="logo">
          <h1 class="font-sans">
            <a href="#app" v-smooth-scroll>nartygdansk.pl</a>
          </h1>
        </div>
        <div class="links">
          <a href="#news" v-smooth-scroll>Aktualności</a>
          <a href="#terms" v-smooth-scroll>Komis</a>
          <a href="#contact" v-smooth-scroll>Kontakt</a>
          <a :href="mapUrl" target="blank" class="btn">Wyznacz trasę</a>
        </div>
        <Hamburger/>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  @apply relative;
}
.logo {
  @apply text-2xl text-red-500;
}
.links {
  @apply font-serif text-lg hidden md:block;
}
.links a {
  @apply text-red-600 font-medium px-2 mx-2;
}
.links a:last-child {
  @apply mr-0;
}
.links .btn {
  @apply text-white;
}
</style>
