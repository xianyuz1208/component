import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import extendCom from './views/components/extendCom.vue'
Vue.prototype.$showInfo = function(){
  let Instance  = Vue.extend(extendCom)
  // window.console.log(Instance)
  let com = new Instance().$mount()
  // window.console.log(com)
  document.body.appendChild(com.$el)
}
import myMessage from './views/components/message.vue'
Vue.prototype.$message = function({type,title,duration}){
  //创建构造器
  let Instance = Vue.extend(myMessage)
  //创建实例对象
  let instance = new Instance()
  instance.type = type
  instance.title = title
  instance.duration = duration
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.show()
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
