<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: 'default page title',
    }
  },
  watch: {
    globalMsg(newVal) {
      console.log('watch in page--------globalMsg changed newVal: ', newVal)
      this.title = newVal
    },
  },
  methods: {
    triggerGlobalMethod() {
      this.globalMethod()
    },
    pageMethod() {
      console.log('pageMethod')
      this.globalMsg = 'page msg'
    },
  },
}
</script>

<template>
  <div>
    <text class="title">title in page: {{ title }}</text>
    <button @click="triggerGlobalMethod">triggerGlobalMethod</button>
    <button @click="pageMethod">pageMethod</button>
    <HelloWorld />
    <Foo />
    <Bar />
    <MyFoo />
  </div>
</template>
