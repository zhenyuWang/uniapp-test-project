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
export function createApp() {
  const app = createSSRApp(App)
	app.config.globalProperties.msg = 'hello'
	app.config.globalProperties.bool = false
	app.config.globalProperties.num = 123
	app.config.globalProperties.obj = { a: 1 }
	app.config.globalProperties.arr = [1, 2, 3]
	app.config.globalProperties.fn = () => {
		// const msg = this.msg
		// const num = this.num
		// console.log('globalProperties fn', msg, num)
		// return `${msg}-${num}`
		return 'fn'
	}
  return {
    app
  }
}
// #endif