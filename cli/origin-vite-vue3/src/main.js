import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.globalPropertiesStr = 'default str'
app.config.globalProperties.globalPropertiesNum = 100

app.mount('#app')
