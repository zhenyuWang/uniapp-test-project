<script>
export default {
  data() {
    return {
      title: 'default foo title',
    }
  },
  watch: {
    globalMsg(newVal) {
      console.log(
        'watch in component----------globalMsg changed newVal: ',
        newVal
      )
      this.title = newVal
    },
  },
  methods: {
    componentMethod() {
      console.log('componentMethod')
      this.globalMsg = 'component msg'
    },
  },
}
</script>

<template>
  <div>
    <text class="title">title in component: {{ title }}</text>
    <button @click="componentMethod">componentMethod</button>
  </div>
</template>
