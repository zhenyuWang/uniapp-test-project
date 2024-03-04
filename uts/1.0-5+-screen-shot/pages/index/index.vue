<template>
  <view class="content">
    <text>{{title}}</text>
    <button @click="screenShot">test screen shot</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'index page',
      }
    },
    methods: {
      screenShot() {
        const pages = getCurrentPages();
        const len = pages.length;
        if (len) {
          const page = pages[len - 1];
          if (page) {
            const webview = page.$getAppWebview();
            const bitmap = new plus.nativeObj.Bitmap("captureScreenshot");
            webview.draw(
              bitmap,
              () => {
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