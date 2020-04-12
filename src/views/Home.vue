<template>
  <div class="home">
    <Alert closable>点击</Alert>
    <Button type="primary" @click="changeData">默认标签</Button>
    <!-- <St>你好啊<a href="#">你好啊啊</a></St> -->
    <br />
    <Counter></Counter>
    <br />
    <!-- 父组件<input type="text" v-model="value">
    <br />
    子组件<vModelCom :value="value" @input="(value=$event)"></vModelCom>
    <br /> -->
    <div class="vinput">
      <vInput v-model="value" showPassword></vInput>
    </div>
    <vSwitch
      v-model="changeValue"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></vSwitch>
    <br />
    <radioGroup v-model="radioValue">
      <vRadio label="1">西瓜</vRadio>
      <vRadio label="2">荔枝</vRadio>
      <vRadio label="3">菠萝</vRadio>
      <vRadio label="4">桃子</vRadio>
    </radioGroup>
    <br />
    <checkboxGroup v-model="checkList">
       <vCheckbox label="烤肉"></vCheckbox>
       <vCheckbox label="火锅"></vCheckbox>
       <vCheckbox label="烧烤"></vCheckbox>
       <vCheckbox label="寿司"></vCheckbox>
    </checkboxGroup>
    <br />
    <Button @click="visiable = true">点击打开dialog</Button>
    <myDialog :visiable.sync="visiable">
      <template v-slot:title>
        头部
      </template>
      <p>这是内容</p>
      <template v-slot:footer>
        <Button type="success">注册</Button>
        <Button type="warning">关闭</Button>
      </template>
    </myDialog>
  </div>
</template>

<script>
import Alert from './components/alert'
import Button from './components/button'
import Counter from './components/counter'
// import vModelCom from './components/vModelCom'
import vInput from './components/vInput'
import vSwitch from './components/switch'
import vRadio from './components/radio'
import radioGroup from './components/radioGroup'
import vCheckbox from './components/checkbox'
import checkboxGroup from './components/checkboxGroup'
import myDialog from './components/dialog'
// import St from './components/slot'
export default {
  name: 'Home',
  components: {
    Alert,
    Button,
    Counter,
    // vModelCom,
    vInput,
    vSwitch,
    vRadio,
    radioGroup,
    vCheckbox,
    checkboxGroup,
    myDialog
    // St
  },
  data() {
    return {
      value: '',
      changeValue: true,
      radioValue: '',
      checked:true,
      checkList:[],
      visiable:false    
    }
  },
  created(){
    this.$showInfo()
  },
  methods: {
    changeData() {
      window.alert('哈哈哈')
    }
  }
}
</script>
<style lang="less">
.my-button {
  margin: 30px;
}
.vinput {
  margin: 20px;
}
</style>
