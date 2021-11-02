<script>
export default {
  name: 'Modal',
  props: {
    onOpen: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      default: () => ({})
    },
  },
  emits: ['open'],
  methods: {

  }
}
</script>
<template>
  <transition name="fade" :duration="200" appear>
    <div v-if="onOpen" class="modal" @click.self="toggle">
      <div class="modal-wrapper">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header" />
            <button class="modal-btn" @click="toggle">
              <span class="line" />
              <span class="line" />
            </button>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.modal {
  @apply fixed top-0 left-0 p-4 w-full h-full pt-[70px];
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-wrapper {
  @apply w-full h-full p-4 rounded-lg border border-gray-300 bg-white relative overflow-auto;
}
.modal-header {
  @apply w-full mt-8 mb-2;
}
.modal-btn {
  @apply absolute right-0 top-0 p-2 m-2 min-w-[20px];
}
.line {
  @apply absolute top-1/2 left-0 block h-[2px] w-full min-w-[20px] bg-black transform -rotate-45 max-w-[20px];
}
.line:first-child {
  @apply transform rotate-45;
}
@screen md {
  .modal {
    @apply flex items-center justify-center;
  }
  .modal-wrapper {
    @apply max-w-2xl;
    max-height: 50vh;
  }
}
</style>
