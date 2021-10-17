// 项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  // 功能：将app组件放入容器中 
  render: h => h(App),

  // 这里没有使用components注册子组件 index.html里面也没有通过自闭合标签使用组件
  // 事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
