<template>  
  <view class="box" @click="randomSort()">  
    <view v-for="item of list" :key="item.key">{{item.key}}</view>  
  </view>  
</template>  

<script>  
export default {  
  name: "Test",  
  data () {  
    return {  
      list: [  
        { key: 0 },  
        { key: 1 },  
        { key: 2 },  
      ]  
    }  
  },  
  methods: {  
    randomSort () {  
      this.list.sort(() => {  
        return Math.random() - 0.5  
      })  
    }  
  }  
}  
</script>  
<style>
	.box{padding-left: 30px;}
</style>