<template>
  <div class='slot-container'>
      <!-- 希望放置内容的位置，添加slot标签即可 -->
      <slot>默认值</slot>
  </div>
</template>

<script>
export default {
    name:'slot-use',
  	created(){
			console.log(this.$slots)
    }
}
</script>

<style lang='less'>
    .slot-container{
        width: 400px;
        border: 1px solid orange;
        box-shadow: 0 0 10px skyblue;
    }
</style>