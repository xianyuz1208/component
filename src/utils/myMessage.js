import myMessage from '../views/components/message.vue'
export default{
  install(Vue){
    Vue.prototype.$message = function({type,title,duration}){
      //创建构造器
      let Instance = Vue.extend(myMessage)
      //创建实例对象
      let instance = new Instance()
      instance.type = type
      instance.title = title
      instance.duration = duration
      //根据template渲染dom
      instance.$mount()
      //渲染到页面上
      document.body.appendChild(instance.$el)
      instance.show()
    }
  }
}