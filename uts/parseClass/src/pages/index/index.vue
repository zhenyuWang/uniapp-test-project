<template>
    <view style="width:100px;height:100px;backgroundColor: #ffff00;">
        <text>hello world</text>
    </view>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello world',
            count: 0
        }
    }
}
</script>
<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.content .text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>