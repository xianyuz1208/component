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
    <vRadio v-model="radioValue" label="1">西瓜</vRadio>
    <vRadio v-model="radioValue" label="2">荔枝</vRadio>
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
    vRadio
    // St
  },
  data() {
    return {
      value: '',
      changeValue: true,
      radioValue:"",
    }
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
