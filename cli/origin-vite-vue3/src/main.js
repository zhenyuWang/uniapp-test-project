import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.str = 'default str'
app.config.globalProperties.num = 100

app.mount('#app')
