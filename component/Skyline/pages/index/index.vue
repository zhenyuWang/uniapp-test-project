<template>
	<view class="page"
		style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center">
		<share-element key="bill" style="width:100px;height:150px" @click="showNext">
			<image class="image" mode="aspectFill"
				src="https://cdn.enshimama.com/wp-content/uploads/gallery/sites/7/2023/03/2-1.webp"
				style="width:100%;height:100%;border-radius:10px" />
		</share-element>
		<text>第一页</text>
	</view>
</template>

<script>
	import CustomRouteType from "../../utils/custom-route/custom-route.js";
	export default {
		methods: {
			showNext(e){
				wx.navigateTo({
					url: "/pages/next/next",
					routeType: CustomRouteType.OpacityTransition,
					success(res) {
						console.log("navigateTo next success", res);
					},
					fail(res) {
						console.log("navigateTo next fail", res);
					}
				});
			}
		}
	}
</script>