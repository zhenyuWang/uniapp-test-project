<template>
	<view class="page-section-gap">
		<map :markers="markers" id="map1" style="width: 100%; height: 300px;" class="map-container" :latitude="latitude"
			:longitude="longitude" @callouttap="previewAdImg">
			<!-- #ifdef MP-WEIXIN -->
			<cover-view slot="callout">
				<block v-for="(item,index) in markerIds" :key="index">
					<cover-view class="customCallout" :marker-id="item">
						<cover-image class="icon" src="https://z3.ax1x.com/2020/12/07/Dv6FiT.jpg"></cover-image>
						<cover-view class="content">{{item}}</cover-view>
					</cover-view>
				</block>
			</cover-view>
			<!-- #endif -->
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				markers: [{
					id: 1,
					latitude: 39.9085,
					longitude: 116.39747,
					width: 40,
					height: 40,
					iconPath: '../../static/logo.png',
					customCallout: {
						anchorY: 0,
						anchorX: 20,
						display: 'ALWAYS',
					}
				}, {
					id: 2,
					latitude: 39.90,
					longitude: 116.4,
					width: 40,
					height: 40,
					iconPath: '../../static/logo.png',
					customCallout: {
						anchorY: 0,
						anchorX: 20,
						display: 'ALWAYS',
					}
				}],
				markerIds: [1, 2]
			}
		},
		methods: {
			previewAdImg() {
				console.log('previewAdImg');
			}
		}
	}
</script>

<style>
	.page-section-gap {
		box-sizing: border-box;
		padding: 0 30rpx;
	}

	.customCallout {
		box-sizing: border-box;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 30px;
		width: 150px;
		height: 40px;
		display: inline-flex;
		padding: 5px 20px;
		justify-content: center;
		align-items: center;
	}

	.circle {
		width: 20px;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 50%;
	}

	.icon {
		width: 16px;
		height: 16px;
	}

	.content {
		flex: 0 1 auto;
		margin: 0 10px;
		font-size: 14px;
	}
</style>
