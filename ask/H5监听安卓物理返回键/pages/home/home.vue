<template>
  <view id="home">
    <aaa></aaa>
    <bbb></bbb>
		<navigator url="/pages/about/about">go about</navigator>
  </view>
</template>
<script>
import aaa from "../../components/a.vue"
import bbb from "../../components/b.vue"
export default {
	components:{aaa,bbb}
}
</script>
<style lang="scss">
@import "../../style/home.scss";
</style>
