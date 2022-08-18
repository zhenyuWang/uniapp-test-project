<template>
  <view class="content">
    <map id="map" class="map" :show-location="true" :latitude="latitude" :longitude="longitude"></map>
    <button @click="updateLocation">updateLocation</button>
		this is new vue3
  </view>
</template>

<script>
  export default {
    data() {
      return {
        latitude: 39.90,
        longitude: 116.39,
      }
    },
    onReady() {
      // setTimeout(() => {
      //   this.updateLocation()
      // }, 500)
    },
    methods: {
      updateLocation() {
        this.latitude = 39.6;
        this.longitude = 116.2;
        console.log(this.latitude, this.longitude);
      }
    }
  }
</script>

<style>
	.map{
		height:400px;
	}
</style>
