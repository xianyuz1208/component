<template>
  <div class="my-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"my-radio-group",
  //将自己传递出去
  provide(){
    return{
      radioGroup:this
    }
  },
  props:{
    value:{
      type:[String,Boolean,Number]
    }
  }
}
</script>
<style>
  .my-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
  }
</style>