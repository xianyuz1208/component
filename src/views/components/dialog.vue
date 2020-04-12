<template>
  <transition name="fade">
    <!-- 四周的黑色蒙版 -->
    <div @click.self="closeDialog" class="my-dialog__wrapper" v-show="visiable">
      <div class="my-dialog" :style="{ width: width, marginTop: top }">
        <!-- 头部 -->
        <div class="my-dialog__header">
          <span v-if="!$slots.title" class="my-dialog__title">{{ title }}</span>
          <slot name="title"></slot>
          <!-- 关闭按钮 -->
          <button
            v-if="showClose"
            @click="closeDialog"
            type="button"
            aria-label="Close"
            class="my-dialog__headerbtn"
          >
            <i class="iconfont icon-close"></i>
          </button>
        </div>
        <!-- 主体 -->
        <div class="my-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <!-- 脚部 -->
        <div class="my-dialog__footer">
          <span class="dialog-footer">
            <!-- 具名插槽 -->
            <slot name="footer"></slot>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'my-dialog',
  props: {
    visiable: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    'show-close': {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closeDialog() {
      // this.$emit('close', false)
      this.$emit('update:visiable', !this.visiable)
    }
  }
}
</script>
<style lang="less">
// 定义动画
@keyframes dialog-fade {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  50% {
    transform: translateY(1px);
    opacity: 0.5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
// 进入的动画
.dialog-fade-enter-active {
  animation: dialog-fade 0.2s;
}
// 离开的动画
.dialog-fade-leave-active {
  animation: dialog-fade 0.2s reverse;
}
.my-dialog__wrapper {
  z-index: 2011;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  .my-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 50%;
    .my-dialog__header {
      padding: 20px 20px 10px;
      .my-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .my-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .iconfont {
          color: #909399;
        }
      }
    }
    .my-dialog__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .my-dialog__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
</style>
