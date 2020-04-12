<template>
  <p class="extend-container" @click="remove" >
    info的值为:{{ info }}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        info: '测试文本'
      }
    },
    methods: {
      remove() {
        this.$el.parentNode.removeChild(this.$el)
      },
    }
  }
</script>

<style>
  .extend-container {
    border: 1px solid orange;
  }
</style>