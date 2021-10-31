
<template>
  <section class="section" id="news">
    <div class="container px-4">
      <div class="news__header">
        <h2 class="section-title">Aktualności</h2>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <button class="block text-center mx-auto">Załaduj więcej</button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@screen md {
  .content {
    @apply flex justify-around;
  }
}
</style>
