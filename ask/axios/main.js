import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import store from './store'
console.log('vue3 store',store);
export function createApp() {
  const app = createSSRApp(App)
	app.use(store)
  return {
    app
  }
}
// #endif