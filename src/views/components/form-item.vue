<template>
  <div class="my-form-item">
    <label class="my-form-item__label" v-if="label" :style="{width: labelWidth || rootForm.labelWidth}">{{label}}</label>
    <div class="my-form-item__content" :style="{marginLeft: labelWidth || rootForm.labelWidth}">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'my-form-item',
  inject:['rootForm'],
  props:{
    label:{
      type:String
    },
    'label-width':{
      type:String
    }
  }
}
</script>
<style lang="less">
  .my-form-item {
    margin-bottom: 22px;
    &::before {
      display: table;
      content: '';
    }
    // 文本
    .my-form-item__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    // 内容
    .my-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
      &::before {
        display: table;
        content: '';
      }
    }
  }
</style>