import App from './App'

import Vue from 'vue'
import store from './store'
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    store,
    ...App
})
app.$mount()

// import { createSSRApp } from 'vue'
// import store from './store/index.js'
// export function createApp() {
//   const app = createSSRApp(App)
// 	app.use(store)
//   return {
//     app
//   }
// }
