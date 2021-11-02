<script>
import MapImage from '../assets/staticmap.jpeg';
import Store from '../store'

export default {
  name: 'Contact',
  data() {
    return {
      section: '',
      closedMessage: 'Dziś zamknięte',
      MapImage,
      form: {
        name: '',
        email: '',
        message: ''
      },
    }
  },
  mounted() {
    this.section = Store.getData('info')
  },
}

</script>
<template>
  <footer class="section pb-0" id="contact">
    <div class="container px-4">
      <h2 class="section-title">Kontakt</h2>
      <div class="content">
        <img :src="MapImage" alt="bussines location on google maps" class="block object-fill" />
        <div class="flex flex-col md:flex-row my-4">
          <div class="item md:w-1/3 lg:w-1/4 mb-0">
            <h3 class="footer-heading">Godziny otwarcia:</h3>
            <div class="flex flex-col md:flex-row">
              <ul>
                <li><span class="day">pon.:</span> {{ section.hoursMonday || closedMessage }}</li>
                <li><span class="day">wt.:</span> {{ section.hoursTuesday || closedMessage }}</li>
                <li><span class="day">śr.:</span> {{ section.hoursWednesday || closedMessage }}</li>
                <li><span class="day">czw.:</span> {{ section.hoursThursday || closedMessage }}</li>
              <!-- </ul> -->
              <!-- <ul class="md:ml-6"> -->
                <li><span class="day">pt.:</span> {{ section.hoursFriday || closedMessage }}</li>
                <li><span class="day">sob.:</span> {{ section.hoursSaturday || closedMessage }}</li>
                <li><span class="day">niedz.:</span> {{ section.hoursSunday || closedMessage }}</li>
              </ul>
            </div>
          </div>
          <div class="item md:w-1/3 lg:w-1/4">
            <h3 class="footer-heading">Kontakt:</h3>
            <ul class="mb-4 flex-grow">
              <li>
                tel:&nbsp;
                <a href="tel:0048000000000">508 485 690</a>
              </li>
              <li>
                tel:&nbsp;
                <a href="tel:0048000000000">58 554 72 07</a>
              </li>
            </ul>
            <a href class="btn self-start">Zadzwoń teraz</a>
          </div>
          <div class="item md:w-1/3 lg:w-1/4">
            <h3 class="footer-heading">Adres:</h3>
            <address class="flex flex-col mb-4 not-italic flex-grow">
              <span>Kazimierza Górskiego 1</span>
              <span>80-336 Gdańsk</span>
              <span>Polska</span>
            </address>
            <a
              href="https://www.google.com/maps/dir//nartygdansk.pl/data=!4m8!4m7!1m0!1m5!1m1!1s0x46fd0ac835ce2f91:0x6ef6191e630f3f6d!2m2!1d18.5607063!2d54.418360899999996"
              class="btn self-start"
            >Wyznacz trasę</a>
          </div>
        </div>
      </div>
      <span class="block text-right">
        &copy;
        <a href="https://nartygdansk.pl" class="font-serif text-xs pr-4">nartygdansk.pl</a>
      </span>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.item {
  @apply flex flex-col mb-4;
}
li {
  @apply flex;
}
.day {
  @apply mr-4;
  display: block;
  min-width: 50px;
}
.footer-heading {
  @apply font-serif text-lg font-semibold mt-4 mb-2;
}
</style>
