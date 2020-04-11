<template>
  <div>
    <input type="text" v-bind:value="value" @input="input">
  </div>
</template>

<script>
export default {
  name:'vmodel',
  props:{
    value:{
      type:String,
    }
  },
  methods:{
    input($event){
      this.$emit('input',$event.target.value)
    }
  }
}
</script>

<style>

</style>