<template>
  <view class="content" :key='key'>
    <text>start</text><text id="test-id">this is index page</text><text>end</text>
    <Foo class="foo" />
    <input class="my-input" type="text" v-model="title">
    <text>title: {{title}}</text>
    <button @click="goErrorPage">goErrorPage</button>
  </view>
</template>

<script>
  import Foo from './Foo.vue'
  export default {
    components: {
      Foo
    },
    data() {
      return {
        title: 'index page',
        key: Date.now(),
        data: null,
        type: 'default',
        header: {},
        myMap: new Map([
          ['a', 'a'],
          ['b', 'b']
        ]),
        mySet: new Set([1, 2, 3]),
      }
    },
    // onLoad() {
    //   uni.navigateTo({
    //     url:'/pages/index/about',
    //     success(res){
    //       console.log('res',res);
    //     }
    //   })
    // },
    methods: {
      goErrorPage() {
        uni.navigateTo({
          url: 'a/b/c',
          success() {
            console.log('uni.navigateTo success')
          },
          fail() {
            console.log('uni.navigateTo fail')
          },
          complete() {
            console.log('uni.navigateTo complete')
          }
        })
      }
    }
  }
</script>
