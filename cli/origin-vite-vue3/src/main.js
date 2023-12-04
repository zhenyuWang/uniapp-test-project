import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

const app = createApp(App)
app.config.globalProperties.str = 'default str'
app.config.globalProperties.num = 100
app.component('Foo', Foo)
app.component('Bar', Bar)
app.mixin({
  data() {
    return {
      globalMsg: 'default global data',
      MyFoo,
    }
  },
  watch: {
    globalMsg(newVal) {
      console.log('watch in main.uts--------globalMsg changed newVal: ', newVal)
      this.title = newVal
    },
  },
  methods: {
    globalMethod() {
      console.log('globalMethod')
      this.globalMsg = 'globalMsg'
    },
  },
})

app.mount('#app')
