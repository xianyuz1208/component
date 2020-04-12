<template>
  <div class="my-checkbox-group">
   <slot></slot>
  </div>
</template>
<script>
export default {
  name:"my-checkbox-group",
  props:{
    value:{
      type:Array
    }
  },
  provide(){
    return{
      checkboxGroup:this
    }
  }
}
</script>
<style>
  .my-checkbox-group {
    font-size: 0;
  }
</style>