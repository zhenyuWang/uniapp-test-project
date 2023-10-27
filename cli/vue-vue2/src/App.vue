<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <span class="font-size-20" style="font-family: UniIcon">{{ uniIcon1 }}</span>
    <span class="font-size-20" style="font-family: UniIcon">\ue100</span>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      uniIcon1: '\ue100',
    }
  },
}
</script>

<style>
@font-face {
  font-family: UniIcon;
  src: url('./assets/uni.ttf');
}
.font-size-20{
  font-size: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  span-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 2px solid red;
}
</style>
