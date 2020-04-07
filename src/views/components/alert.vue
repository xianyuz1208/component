<template>
<div class="my-alert alert-success">
  <div class="alert_content">
    <span class="alert_title">成功提示的文案</span>
    <i class="alert_closebtn iconfont icon-close"></i>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .my-alert{
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
     &.alert-success{
       background-color: #f0f9eb;
       color: #67c23a;
     }
  }
</style>