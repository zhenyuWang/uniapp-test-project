import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.str = 'default str'
app.config.globalProperties.num = 0
app.config.globalProperties.bool = false
app.mount('#app')
