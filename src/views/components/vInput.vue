<template>
  <div
    class="my-input"
    :class="{ 'is-disabled': disabled, 'my-input-password': showPassword }"
  >
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      autocomplete="off"
      :placeholder="$attrs.placeholder || '请输入内容'"
      :disabled="disabled"
      :value="value"
      @input="$emit('input',$event.target.value)"
      class="my-input__inner"
    />
    <span>
      <i
      @click="passwordVisible = !passwordVisible"
      v-if="showPassword"
      class="iconfont icon-password-visible"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'my-input',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    'show-password': {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      type: 'text',
      passwordVisible: false
    }
  }
}
</script>

<style lang="less">
.my-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  // width: 100%;
  &.my-input-password {
    .my-input__inner {
      padding-right: 30px;
    }
  }
  .my-input__inner {
    -webkit-appearance: none;
    cursor: pointer;
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
  }
  &.is-disabled .my-input__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
    // placeholder兼容样式处理
    &::-webkit-input-placeholder {
      color: #c0c4cc;
    }
    &::-moz-input-placeholder {
      color: #c0c4cc;
    }
    &::-ms-input-placeholder {
      color: #c0c4cc;
    }
  }
  .iconfont {
    position: absolute;
    height: 100%;
    // pointer-events: all;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    line-height: 40px;
    // z-index: 2;
    cursor: pointer;
  }
}
</style>
