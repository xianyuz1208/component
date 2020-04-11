<template>
  <div class="my-input-number">
    <!-- 递减 -->
    <span role="button" @click="decrease" class="my-input-number__decrease" :class="{'is-disabled': selfValue <= min}">
      -
    </span>
    <!-- 累加 -->
    <span role="button" @click="increase" class="my-input-number__increase" :class="{'is-disabled': selfValue >= max}">
      +
    </span>
    <div class="my-input">
      <!-- 数字显示区域 -->
      <span class="my-input__inner">{{selfValue}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"my-counter",
  props:{
      value:{
        type:Number,
        default:0
      },
      min:{
        type:Number,
        default:0
      },
      max:{
        type:Number,
        default:10
      },
      step:{
        type:Number,
        default:1
      }
  },
  data(){
    return{
      selfValue:this.value
    }
  },
  watch:{
    //监听数据通知父组件发生的改变
    selfValue(val){
      this.$emit('change',val)
    }
  },
  methods:{
      decrease(){
        if(this.selfValue <= this.min){
          return
        }else{
          this.selfValue -= this.step
          //判断是否比最小值还要小,如果比最小值还小那么就等于最小值,如果不是,就是当前的数值
          this.selfValue = this.selfValue < this.min ? this.min : this.selfValue
        }
      },
      increase(){
        //如果当前数值大于或等于最大值,那么就只返回当前数值
        if(this.selfValue >= this.max){
          return
        }else{
          //否则把+step的值赋值于当前数值
          this.selfValue += this.step
          this.selfValue = this.selfValue > this.max ? this.max : this.selfValue
        }
      }
  }
}
</script>

<style lang="less">
  .my-input-number {
    position: relative;
    display: inline-block;
    width: 180px;
    line-height: 38px;
    span {
      // 禁止元素的文字被选中
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    .my-input {
      display: block;
      position: relative;
      font-size: 14px;
      width: 100%;
    }
    .my-input__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      padding-left: 50px;
      padding-right: 50px;
      text-align: center;
    }
    // 递减按钮
    .my-input-number__decrease,
    .my-input-number__increase {
      position: absolute;
      z-index: 1;
      top: 1px;
      width: 40px;
      height: auto;
      text-align: center;
      background: #f5f7fa;
      color: #606266;
      cursor: pointer;
      font-size: 13px;
    }
    .my-input-number__decrease {
      left: 1px;
      border-radius: 4px 0 0 4px;
      border-right: 1px solid #dcdfe6;
    }
    .my-input-number__increase {
      right: 1px;
      border-radius: 0 4px 4px 0;
      border-left: 1px solid #dcdfe6;
    }
    .my-input-number__decrease,
    .my-input-number__increase {
      // 禁用需要添加的类名
      &.is-disabled {
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }
</style>