<template>
  <view class="content">
    <image class="logo" :src="current" @tap="previewImage" />
  </view>
</template>

<script setup lang="ts">
const current =
  "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500";
const previewImage = () => {
  const urls = [
    "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
    "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
    "https://img2.baidu.com/it/u=63249423,2260265143&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
  ];
  uni.showToast({
    title:'提示'
  })
  uni.previewImage({
    current,
    urls,
    success: (result) => {
      console.log("result: ", result);
    },
    fail: (error) => {
      console.log("error: ", error);
    },
  });
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

</style>