<template>
  <view>
    <view class="uni-padding-wrap">
      <text class="font-size-20">全局加载字体：</text>
      <text class="font-size-20 line-height-40" style="font-family: UniFontFamily">font-family: uni.ttf</text>
      <view style="flex-direction: row;">
        <text class="font-size-20" style="font-family: UniFontFamily;">&#xe100;</text>
        <text>1111111111</text>
        <text v-if="showIcon" class="font-size-20" style="font-family: UniFontFamily;">{{
         uniIcon0
       }}</text>
        <text v-if="showIcon">1.555</text>
        <text>22222222</text>
        <text class="font-size-20" style="font-family: UniFontFamily;">{{
         uniIcon1
       }}</text>
        <text style="margin-left:5px;margin-right: 20px;line-height:22px;">\ue100</text>
        <text class="font-size-20" style="font-family: UniFontFamily;">{{
          uniIcon2
        }}</text>
        <text style="margin-left:5px;line-height:22px;">\ue101</text>
      </view>
      <text class="uni-common-mt font-size-20">非全局加载字体：</text>
      <text class="font-size-20 line-height-40" style="font-family: AlimamaDaoLiTiTTF">font-family: 阿里妈妈刀隶体-ttf
        (网络字体下载后生效)</text>
      <text class="font-size-20 line-height-40" style="font-family: AlimamaDaoLiTiOTF">font-family:
        阿里妈妈刀隶体-otf</text>
      <text class="item" style="font-family: AlimamaDaoLiTiWOFF">font-family: 阿里妈妈刀隶体-woff</text>
      <text class="item" style="font-family: AlimamaDaoLiTiWOFF2">font-family: 阿里妈妈刀隶体-woff2</text>
      <button class="uni-btn" @click="navigateToChild">跳转子页面测试字体生效范围</button>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        uniIcon0: '&#xe100;',
        uniIcon1: '\ue100',
        uniIcon2: '\ue101',
        showIcon: true
      }
    },
    onLoad() {
      // const self = this
      // uni.loadFontFace({
      //   global: true,
      //   family: 'UniFontFamily',
      //   source: "url(/static/font/uni.ttf)",
      //   success() {
      //     console.log('global loadFontFace uni.ttf success')
      //     setTimeout(() => {
      //       self.showIcon = true
      //       console.log('1111111111111111111111')
      //     }, 2000)
      //   },
      //   fail(error) {
      //     console.warn('global loadFontFace uni.ttf fail', error.errMsg)
      //   },
      // })
      uni.loadFontFace({
        family: 'AlimamaDaoLiTiTTF',
        source: "url('https://native-res.dcloud.net.cn/uni-app-x/static/font/AlimamaDaoLiTi.ttf')",
        success() {
          console.log('loadFontFace Remote AlimamaDaoLiTi.ttf success')
        },
        fail(error) {
          console.warn('loadFontFace Remote AlimamaDaoLiTi.ttf fail', error.errMsg)
        },
      })
      uni.loadFontFace({
        family: 'AlimamaDaoLiTiOTF',
        source: "url('/static/font/AlimamaDaoLiTi.otf')",
        success() {
          console.log('loadFontFace AlimamaDaoLiTi.otf success')
        },
        fail(error) {
          console.warn('loadFontFace AlimamaDaoLiTi.otf fail', error.errMsg)
        },
      })
      uni.loadFontFace({
        family: 'AlimamaDaoLiTiWOFF',
        source: 'url("/static/font/AlimamaDaoLiTi.woff")',
        success() {
          console.log('loadFontFace AlimamaDaoLiTi.woff success')
        },
        fail(error) {
          console.warn('loadFontFace AlimamaDaoLiTi.woff fail', error.errMsg)
        },
      })
      uni.loadFontFace({
        family: 'AlimamaDaoLiTiWOFF2',
        source: "url('/static/font/AlimamaDaoLiTi.woff2')",
        success() {
          console.log('loadFontFace AlimamaDaoLiTi.woff2 success')
        },
        fail(error) {
          console.warn('loadFontFace AlimamaDaoLiTi.woff2 fail', error.errMsg)
        },
      })
    },
    methods: {
      navigateToChild() {
        uni.navigateTo({
          url: '/pages/about/about',
        })
      },
    },
  }
</script>

<style>
  .font-size-20 {
    font-size: 20px;
  }

  .line-height-40 {
    line-height: 40px;
  }

  @font-face {
    font-family: "UniFontFamily";
    src: url("/static/font/uni.ttf")
  }

  .icon {
    font-family: "UniFontFamily";
  }
</style>