<script>
import MapImage from '../assets/staticmap.jpeg';
import Store from '../store'

export default {
  name: 'Contact',
  data() {
    return {
      section: '',
      closedMessage: 'Zamknięte',
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
          <div class="item md:w-1/3 lg:w-1/4">
            <h3 class="footer-heading">Kontakt:</h3>
            <ul class="mb-4 flex-grow">
              <li>
                tel:
                <a href="tel:0048000000000">508 485 690</a>
              </li>
              <li>
                tel:
                <a href="tel:0048000000000">58 554 72 07</a>
              </li>
              <li></li>
            </ul>
            <a href class="btn">Zadzwoń teraz</a>
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
            >Wyznacz trasę</a>
          </div>
          <div class="item md:w-1/3 lg:w-1/4">
            <h3 class="footer-heading">Godziny otwarcia:</h3>
            <div class="flex flex-col md:flex-row">
              <ul>
                <li>pon.: {{ section.hoursMonday || closedMessage }}</li>
                <li>wt.: {{ section.hoursTuesday || closedMessage }}</li>
                <li>śr.: {{ section.hoursWednesday || closedMessage }}</li>
                <li>czw.: {{ section.hoursThursday || closedMessage }}</li>
              </ul>
              <ul class="md:ml-6">
                <li>pt.: {{ section.hoursFriday || closedMessage }}</li>
                <li>sob.: {{ section.hoursSaturday || closedMessage }}</li>
                <li>niedz.: {{ section.hoursSunday || closedMessage }}</li>
              </ul>
            </div>
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
.item:last-child {
  @apply mb-0;
}
.footer-heading {
  @apply font-serif text-lg font-semibold mt-4 mb-2;
}
</style>
