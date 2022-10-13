<template>
  <view>
    <navigator url="/pages/setting/setting">go setting</navigator>
    <navigator url="/pages/previewImage/previewImage">previewImage</navigator>
    <input open-type="chooseavatar" @chooseAvatar="myClick" />
    <video id="myVideo"
		src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
		controls
		@play="videoPlay"
		@ended="videoEnded"
		/>
    <uni-badge text="1"></uni-badge>
    <uni-badge text="2" type="success"></uni-badge>
    <uni-badge text="3" type="primary"></uni-badge>
    <Container>
      <template v-if="list.length">
        <child :list="list"></child>
      </template>
    </Container>
    <uni-icons type="contact" size="30"></uni-icons>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'
import UniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
import Container from '../../components/Container.vue'
import Child from '../../components/Child.vue'
console.log('index setup')
const title = ref('Hello')
const videoPlay = () => {
  console.log('video play');
}
const videoEnded = () => {
  console.log('video ended');
}
const myClick = () => {}

const list = [
  {
    id:0,
    name:'0'
  },{
    id:1,
    name:'1'
  },{
    id:2,
    name:'2'
  }
]
</script>