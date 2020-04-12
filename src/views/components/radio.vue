<template>
  <!-- 容器 -->
  <div
    class="my-radio"
    :class="{ 'is-checked': value == label || radioGroup.value == label }"
    @click="emitInput"
  >
    <!-- 输入框盒子 -->
    <span class="my-radio__input">
      <span class="my-radio__inner"></span>
      <!-- 内部的radio标签 -->
      <input
        type="radio"
        :checked="value == label"
        :value="label"
        :name="name"
        class="my-radio__original"
      />
    </span>
    <!-- 文本 -->
    <span class="my-radio__label">
      <slot v-if="$slots.default"></slot>
      <template v-else>{{label}}</template>
    </span>
  </div>
</template>
<script>
export default {
  name: 'my-radio',
  //接收值
  inject:['radioGroup'],
  props: {
    value: {
      type: [String, Number, Boolean],
    },
    label: {
      type: String,
      required:true
    },
    name: {
      type: [String, Number, Boolean]
    }
  },
  methods:{
    emitInput(){
      if(this.value){
        this.$emit('input',this.label)
      }else if(this.radioGroup){
        this.radioGroup.$emit('input',this.label)
      }
    }
  }
}
</script>
<style lang="less">
.my-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  // 选中状态
  &.is-checked {
    .my-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    .my-radio__label {
      color: #409eff;
    }
  }
  .my-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .my-radio__inner {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    &::after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
  }
  .my-radio__original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
  .my-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>
