import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import PageHead from './components/PageHead.vue' //全局引用 page-head 组件
export function createApp() {
  const app = createSSRApp(App)
	app.component('page-head', PageHead) //全局注册 page-head 组件，每个页面将可以直接使用该组件
  return {
    app
  }
}
// #endif