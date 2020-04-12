<template>
<div class="my-alert" v-show="isShow" :class="[`alert-${type}`,{'is-center':center}]">
  <div class="alert_content">
    <span class="alert_title">
      <slot v-if="$slots.default"></slot>
      <template v-else>提示信息!</template>
    </span>
    <i v-if="closable" @click="close" class="alert_closebtn iconfont icon-close"></i>
  </div>
</div>
</template>

<script>
import '@/style/icon-font.css';
export default {
  name:"alert",
  data(){
    return{
      isShow:true
    }
  },
  props:{
    type:{
      type:String,
      default:"info",
      validator(v){
        return ['info','success','warning','error'].includes(v)
      }
    },
    closable:{
      type:Boolean,
      default:true
    },
    center:{
      type:Boolean,
      default:false
    }
  },
  // mounted(){
  //   window.console.log(this.$slots.default)
  // },
  methods:{
    close(){
      this.isShow = false
      this.$emit('close')
    }
  }
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
     &.alert-info{
       background-color: #f4f4f5;
       color: #909399;
     }
     &.alert-warning{
       background-color: #fdf6ec;
       color: #f56c6c;
     }
     // 错误
    &.alert--error {
      background-color: #fef0f0;
      color: #f56c6c;
    }
    &.is-center{
      justify-content: center;
    }
    .alert_content{
      display: table-cell;
      padding: 0 8px;
    }
    .alert_title{
      font-size: 13px;
      line-height: 18px;
    }
    .alert_closebtn{
      font-size: 12px;
      opacity: 1;
      position: absolute;
      top: 12px;
      right: 15px;
      cursor: pointer;
      &::before{
        color: #c0c4cc;
      }
    }
  }
</style>