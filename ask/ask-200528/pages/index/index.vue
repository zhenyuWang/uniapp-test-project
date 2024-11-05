<template>
	<view class="content">
    <text>this is index</text>
    <button @click="goAbout">goAbout</button>
	</view>
</template>

<script>
  export default {
    onShow(){
      console.log('index onShow');
    },
    onHide(){
      console.log('index onHide');
    },
    methods: {
      goAbout(){
        uni.navigateTo({
         url: '/pages/about/about',
         complete(res){
           console.log('goAbout res',res);
         }
        })
      }
    }
  }
</script>
