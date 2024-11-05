<template>
	<view class="content">
    <text>this is about</text>
    <button @click="goSetting">goSetting</button>
	</view>
</template>

<script>
  export default {
    onShow(){
      console.log('about onShow');
    },
    onHide(){
      console.log('about onHide');
    },
    methods: {
      goSetting(){
        uni.navigateTo({
         url: '/pages/setting/setting',
         complete(res){
           console.log('goSetting res',res);
         }
        })
      }
    }
  }
</script>
