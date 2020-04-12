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
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
