<template>
  <view class="content" :key='key'>
    <text>start</text><text id="test-id">this is index page</text><text>end</text>
    <Foo class="foo" />
    <input class="my-input" type="text" v-model="title">
    <text>title: {{title}}</text>
    <button @click="goErrorPage">goErrorPage</button>
    <button @click="screenShot">test screen shot</button>
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
      },
      screenShot() {
        const pages = getCurrentPages();
        const len = pages.length;
        if (len) {
          const page = pages[len - 1];
          if (page) {
            const webview = page.$getAppWebview();
            const bitmap = new plus.nativeObj.Bitmap(
              "captureScreenshot",
              "captureScreenshot.jpeg"
            );
            webview.draw(
              bitmap,
              (res) => {
                console.log('res-------------', res)
                const data = bitmap
                  .toBase64Data()
                bitmap.clear();
                console.log('data-------------', data)
              },
              (err) => {
                reject(Error(`captureScreenshot fail: ${err.message}`));
              }, {
                wholeContent: true,
              }
            );
          }
        }
      }
    }
  }
</script>