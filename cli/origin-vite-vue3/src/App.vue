<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'default page title',
    }
  },
  methods: {
    triggerGlobalMethod() {
      this.title = 'new title'
      this.globalPropertiesStr = 'new globalPropertiesStr'
      this.globalPropertiesNum = 1234
    },
  },
}
</script>

<template>
  <div>
    <div>title: {{title}}</div>
    <div class="uni-common-mt">globalProperties string: {{ globalPropertiesStr }}</div>
    <div class="uni-common-mt">globalProperties number: {{ globalPropertiesNum }}</div>
    <button @click="triggerGlobalMethod">triggerGlobalMethod</button>
  </div>
</template>
