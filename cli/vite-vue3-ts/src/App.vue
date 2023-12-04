<!-- <script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { getCurrentInstance } from 'vue'
console.log('App log vue', getCurrentInstance())
const myClick = (e: any) => {
  console.log('e', e)
}
const uniIcon = '\ue101'
function outerClick() {
  console.log('outerClick')
  this.str = 'new str'
  this.num = 100
  this.bool = true
}
function innerClick() {
  console.log('innerClick')
}
</script> -->

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      uniIcon: '\ue101'
    }
  },
  methods: {
    myClick(e) {
      console.log('e', e)
    },
    outerClick() {
      console.log('outerClick')
      this.str = 'new str'
      this.num = 100
      this.bool = true
    },
    innerClick() {
      console.log('innerClick')
    },
  }
}
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <HelloWorld class="bgR" msg="Vite + Vue" />
  <div @click="myClick">this is vite-vue3-ts</div>
  <div @click="outerClick">
    <div @click.stop.once="innerClick">innerClick</div>
  </div>
  <div>str: {{ str }}</div>
  <div>num: {{ num }}</div>
  <div>bool: {{ bool }}</div>
  <text class="font-size-20" style="font-family: UniFontFamily">{{
    uniIcon
  }}</text>
  <text class="font-size-20" style="font-family: UniFontFamily">&#xe100;</text>
  <text class="font-size-20" style="font-family: UniFontFamily">&#xe101;</text>
  <text
    class="font-size-20 contact"
    style="font-family: UniFontFamily"
    name="contact"
    >a&nbsp;b</text
  >
</template>

<style>
@font-face {
  font-family: UniFontFamily;
  src: url('assets/uni.ttf');
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.bgR {
  height: 300px;
  background-color: red;
}
</style>
