<template>
  <transition name="fade" @after-leave="afterLeava">
    <div v-show="isShow" class="my-message" :class="`my-message--${type}`">
      <i class="my-message__icon iconfont" :class="`icon-${type}`"></i>
      <p class="my-message__content">{{title}}</p>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'my-message',
  data() {
    return {
      type:'info',
      title:'标题',
      duration:1000,
      isShow:false
    }
  },
  methods: {
    show(){
      this.isShow = true
      setTimeout(() =>{
        this.isShow = false
      },this.duration)
    },
    afterLeava(el){
      el.parentNode.removeChild(el)
    }
  }
}
</script>
<style lang="less">
// 之前的样式 版面问题省略
// 淡入的动画
@keyframes fadeEnter {
  from {
    opacity: 0;
    top: 0;
  }
  to {
    opacity: 1;
    top: 20px;
  }
}
// 淡出的动画
@keyframes fadeLeave {
  from {
    opacity: 1;
    top: 20px;
  }
  to {
    opacity: 0;
    top: 0;
  }
}
// 进入效果的类名
.fade-enter-active {
  animation: fadeEnter 0.3s;
}
// 离开效果的类名
.fade-leave-active {
  animation: fadeLeave 0.3s;
}
.my-message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  // 根据类型设置不同的外观
  &.my-message--info {
    color: #909399;
  }
  // success
  &.my-message--success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    .my-message__icon {
      color: #67c23a;
    }
    .my-message__content {
      color: #67c23a;
    }
  }
  // warning
  &.my-message--warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
    .my-message__icon {
      color: #e6a23c;
    }
    .my-message__content {
      color: #e6a23c;
    }
  }
  // error
  &.my-message--error {
    background-color: #fef0f0;
    border-color: #fde2e2;
    .my-message__icon {
      color: #f56c6c;
    }
    .my-message__content {
      color: #f56c6c;
    }
  }
  .my-message__icon {
    margin-right: 10px;
  }
  .my-message__content {
    padding: 0;
    font-size: 14px;
    line-height: 1;
    margin: 0;
  }
}
</style>
