<template>
  <div class="my-checkbox" :class="{'is-checked':isChecked}" @click="emitInput">
    <span class="my-checkbox__input">
      <span class="my-checkbox__inner"></span>
      <input type="checkbox" class="my-checkbox__original" :name="name" :checked="value" :value="label" />
    </span>
    <span class="my-checkbox__label">
     <slot v-if="$slots.default"></slot>
     <template v-else>
       {{label}}
     </template>
    </span>
  </div>
</template>
<script>
export default {
  name:'my-checkbox',
  inject:{
    checkboxGroup:{
      default:''
    }
  },
  props:{
    value:{
      type:Boolean
    },
    label:{
      type:[String,Number,Boolean]
    },
    name:{
      type:String,
      default:""
    }
  },
  computed:{
    isChecked(){
      if(this.checkboxGroup){
        return this.checkboxGroup.value.includes(this.label)
      }else{
        return this.value
      }
    }
  },
  methods:{
    emitInput(){
      if(this.checkboxGroup){
        //处理checkboxGroup中的数组
        let index = this.checkboxGroup.value.indexOf(this.label)
        if(index != -1){
          this.checkboxGroup.value.splice(index,1)
        }else{
          this.checkboxGroup.value.push(this.label)
        }
        //把组件的value抛出去
        this.checkboxGroup.$emit('input',this.checkboxGroup.value)
      }else{
        this.$emit(input,!this.value)
      }
    }
  }
}
</script>
<style lang="less">
  .my-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .my-checkbox__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
    }
    .my-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .my-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
    .my-checkbox__label {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
    // 选中状态
    &.is-checked {
      .my-checkbox__inner {
        background-color: #409eff;
        border-color: #409eff;
        &::after {
          transform: rotate(45deg) scaleY(1);
        }
      }
      .my-checkbox__label {
        color: #409eff;
      }
    }
  }
</style>