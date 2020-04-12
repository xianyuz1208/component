<template>
  <form class="my-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name:'my-form',
  props:{
    'label-width':{
      type:String
    }
  },
  provide(){
    return{
      rootForm:this
    }
  }
}
</script>

<style>

</style>