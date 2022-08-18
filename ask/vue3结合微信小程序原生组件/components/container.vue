
<template>  
    <view class="container">  
        <view class="title">  

            <text>体重控制喂食器</text>  

        </view>  
        <view class="step">  
            <text>Step</text>  
            <text :class="{frist: props.isFrist, num: true}">{{props.stepNum}}</text>  
        </view>  
        <view class="description">  
            <text>{{props.description}}</text>  
        </view>  
        <slot />  
        <view class="footer">  
            <slot name="footer" />  
        </view>  
    </view>  

</template>  

<script setup>  
    import { useSlots } from 'vue'  

    const props = defineProps()  

    console.log(useSlots())  

</script>