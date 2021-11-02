<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      open: false,
      mapUrl: "https://www.google.com/maps/dir//nartygdansk.pl/data=!4m8!4m7!1m0!1m5!1m1!1s0x46fd0ac835ce2f91:0x6ef6191e630f3f6d!2m2!1d18.5607063!2d54.418360899999996",
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      if (document) {
        const body = document.querySelector('body');
        body.style.overflow = this.open ? 'hidden' : 'auto';
      }
    },
  },
};
</script>

<template>
  <nav class="hamburger-menu md:hidden w-3/12 font-serif">
    <button
      class="hamburger"
      :class="open ? 'hamburger--active' : ''"
      :aria-expanded="open ? 'true' : 'false'"
      @click="toggle"
    >
      <span class="sr-only">Otwórz/zamknij menu</span>
      <span class="hamburger__box">
        <span class="hamburger__inner" />
      </span>
    </button>
    <div class="navigation" :class="open && 'navigation--active'">
      <div class="container h-full flex flex-col justify-between">
        <ul class="navigation__list flex-1">
          <li class="navigation__item"></li>
          <li class="navigation__item">
            <a href="#news" @click="toggle" rel="noopener noreferrer" v-smooth-scroll>Aktualności</a>
          </li>
          <li class="navigation__item">
            <a href="#terms" @click="toggle" rel="noopener noreferrer" v-smooth-scroll>Komis</a>
          </li>
          <li class="navigation__item">
            <a href="#contact" @click="toggle" rel="noopener noreferrer" v-smooth-scroll>Kontakt</a>
          </li>
        </ul>
        <div class="flex justify-center">
          <a
            :href="mapUrl"
            class="btn border border-black-300 px-8 py-2"
          >Wyznacz trasę</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$dark: #171717;
$light: #ffffff;
$nav_height: 54px;

@mixin hamburger-line {
  @apply bg-red-600;
  width: 100%;
  height: 2px;
  position: absolute;
}

.hamburger {
  @apply flex justify-center;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  margin-left: auto;
}

.hamburger,
.navigation {
  transition: transform 0.3s 0.1s ease-in-out, visibility 0s 0.4s;
}

.hamburger--active {
  /* transform: translatex(250px); */
}

.hamburger__box {
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger__inner {
  @include hamburger-line;

  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.1s 0.2s ease-in-out;
}

.hamburger__inner::before,
.hamburger__inner::after {
  @include hamburger-line;

  content: "";
  left: 0;
  transition: transform 0.2s 0.2s ease-in-out;
}

.hamburger__inner::before {
  top: -8.8px;
}

.hamburger__inner::after {
  top: 8.8px;
}

.hamburger--active .hamburger__inner {
  transform: rotate(45deg);
}

.hamburger--active .hamburger__inner::before,
.hamburger--active .hamburger__inner::after {
  opacity: 1;
}
.hamburger--active .hamburger__inner:before {
  transform: translateY(9px) rotate(0deg);
}

.hamburger--active .hamburger__inner:after {
  transform: translateY(-10px) rotate(-90deg);
}

.navigation {
  @apply bg-white w-full h-full absolute left-0 pt-16 pb-10;
  height: calc(100vh - #{$nav_height} - 1px);
  top: calc(#{$nav_height} + 1px);
  visibility: hidden;
  transform: translateX(-100vw);
}

.navigation--active {
  transform: translateX(0px);
  transition: transform 0.3s 0.1s ease-in-out, visibility 0s 0s;
  visibility: visible;
}

.navigation__item {
  @apply mb-9;
}
.navigation__item:last-child {
  @apply mb-0;
}
.navigation__item a {
  @apply block text-center py-2;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
