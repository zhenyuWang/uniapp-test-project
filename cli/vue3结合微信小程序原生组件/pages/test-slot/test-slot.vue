<template>  
    <Container  
        isFrist  
        description="请选择您的爱宠"  
        stepNum="1"  
    >  
        <template v-slot:default>  
            <view>猫，狗</view>  
        </template>  
        <template v-slot:footer>  
            <text>点击上方图标跳转页面</text>  
            <view>FIT <br> 低卡轻食</view>  
        </template>  
    </Container>  
</template>  

<script setup>  
    import Container from '../../components/Container.vue'  
</script>