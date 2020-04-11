<template>
  <div
    role="switch"
    class="my-switch"
    :class="{ 'is-checked': value, 'is-disabled': disabled }"
  >
    <input
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :checked="value"
      class="my-switch__input"
    />
    <span
      class="my-switch__core"
      :style="{
        borderColor: value ? activeColor : inactiveColor,
        backgroundColor: value ? activeColor : inactiveColor
      }"
      @click="toggleChecked"
    ></span>
  </div>
</template>
<script>
export default {
  name: 'my-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //打开时的背景色
    'active-color': {
      type: String,
      default: '#409eff'
    },
    //关闭时的背景色
    'inactive-color': {
      type: String,
      default: '#c0ccda'
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods:{
    toggleChecked(){
      if(!this.disabled){
        this.$emit('input',!this.value)
      }
    }
  }
}
</script>
<style lang="less">
.my-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  &.is-disabled {
    opacity: 0.6;
    .my-switch__core {
      cursor: not-allowed;
    }
  }
  .my-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .my-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked .my-switch__core:after {
    left: 100%;
    margin-left: -17px;
  }
}
</style>
