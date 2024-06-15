<template>
	<view class="content">
		<view>
				<!-- @tap="mapTap" -->
			<map id="map" class='map' :key="mapKey" :latitude="latitude" :longitude="longitude"
			  @click="mapClick"
				@callouttap='callouttap'
				@markertap="markerTap" :scale="scale" :controls='controls' :show-location='true'
				:polyline='polyline' :circles='circles' :markers="markers" :min-scale='10' :max-scale="20"
				:polygons='polygons' @regionchange='mapRegionchange' @controltap='controlTap' @labeltap='labelTap'
				@updated="onUpdated" :include-points="includePoints">
			</map>
		</view>
		<button @click="changeLatLng">changeLatLng</button>
		<button type="primary" @click="removeControls">removeControls</button>
		<button type="primary" @click="addControls">addControls</button>
		<button type="primary" @click="changeControl">changeControl</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello-3',
				latitude: 39.909,
				longitude: 116.39742,
				scale: 12,
				markers: [{
					id: 123456789123,
					latitude: 39.9190,
					longitude: 116.39747,
					// title:'test marker title',
					padding: '10px',
					backgroundColor: 'red',
					width: 20,
					height: 20,
					iconPath: '../../static/logo.png',
					label: {
						content: "Hello Label111",
						color: 'blue',
						fontSize: 20,
						x: 30,
						y: -40,
					},
					callout: {
						content: '方恒国际 阜通东大街7号',
						color: '#00BFFF',
						fontSize: 10,
						borderRadius: 4,
						borderWidth: 1,
						borderColor: '#333300',
						bgColor: '#CCFF99',
						padding: '5',
						// display: 'BYCLICK',
						display: 'ALWAYS',
					},
					calloutCopy: {
						content: '方恒国际 阜通东大街7号',
						color: '#00BFFF',
						fontSize: 10,
						borderRadius: 4,
						borderWidth: 1,
						borderColor: '#333300',
						bgColor: '#CCFF99',
						padding: '5',
						// display: 'BYCLICK',
						display: 'ALWAYS',
					}
				}],
				includePoints: [{
						latitude: 40.989631,
						longitude: 116.481018,
					},
					{
						latitude: 39.9086920000,
						longitude: 116.3974770000,
					}
				],
				controls: [{
					id: 1,
						position: {
							left: 5,
							top: 100,
							width: 30,
							height: 30
						},
						iconPath: '/static/logo.png',
						clickable: true
					},
					{id: 2,
					position: {
						left: 5,
						top: 180,
						width: 30,
						height: 30
					},
					iconPath: '/static/voice.png',
					clickable: true
				}],
				circles: [{
						latitude: 39.996441,
						longitude: 116.411146,
						radius: 2000,
						strokeWidth: 5,
						color: '#CCFFFF',
						fillColor: '#CC0000'
					},
					{
						latitude: 40.006441,
						longitude: 116.511146,
						radius: 2500,
						strokeWidth: 3,
						color: '#CCFFFF',
						fillColor: '#FFCCFF'
					},
					{
						latitude: 39.896441,
						longitude: 116.311146,
						radius: 3000,
						strokeWidth: 1,
						color: '#CCFFFF',
						fillColor: '#00ff00'
					}
				],
				polyline: [{
					points: [{
							longitude: 116.403322,
							latitude: 39.920255
						},
						{
							longitude: 116.410703,
							latitude: 39.897555
						},
						{
							longitude: 116.402292,
							latitude: 39.892353
						},
						{
							longitude: 116.389846,
							latitude: 39.891365
						}
					],
					color:'#00ff00',
					strokeColor: "#FF33FF",
					strokeWeight: 6,
					width: 6,
					strokeOpacity: 0.9,
					dottedLine: true,
					zIndex: 5,
					bubble: true,
					borderColor: 'red',
					borderWidth: 6
				}, ],
				polygons: [{
						points: [{
								latitude: 39.781892,
								longitude: 116.293413
							},
							{
								latitude: 39.787600,
								longitude: 116.391842
							},
							{
								latitude: 39.733187,
								longitude: 116.417932
							},
							{
								latitude: 39.704653,
								longitude: 116.338255
							}
						],
						fillColor: '#09c',
						strokeWidth: 10,
						strokeColor: '#ff0000',
						zIndex: 11
					},
					{
						points: [{
								latitude: 39.887600,
								longitude: 116.518932
							},
							{
								latitude: 39.781892,
								longitude: 116.518932
							},
							{
								latitude: 39.781892,
								longitude: 116.428932
							},
							{
								latitude: 39.887600,
								longitude: 116.428932
							}
						],
						fillColor: '#09c',
						strokeWidth: 10,
						strokeColor: '#00ffff',
						zIndex: 3
					}
				],
				map: null,
				mapKey: Date.now()
			}
		},
		onReady() {
			console.log('index onReady');
			this.map = uni.createMapContext('map', this)
			// #ifdef MP-WEIXIN
			// this.map.addGroundOverlay({
			// 	id: 'testAddGroundOverlayId',
			// 	// id:123456,
			// 	src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661340039&t=59e041cc922f55fd47ab1655cc7104ad',
			// 	bounds: {
			// 		southwest: {
			// 			longitude: 116.23,
			// 			latitude: 39.85
			// 		},
			// 		northeast: {
			// 			longitude: 116.55,
			// 			latitude: 39.97
			// 		}
			// 	},
			// 	visible: true,
			// 	complete(res) {
			// 		console.log('addGroundOverlay complate', res)
			// 	}
			// })
			// #endif
			// this.map.getCenterLocation({
			// 	success(res) {
			// 		console.log('getCenterLocation success', res)
			// 	},
			// 	fail(err) {
			// 		console.log('getCenterLocation falil', err)
			// 	},
			// 	complete(res) {
			// 		console.log('getCenterLocation complate', res)
			// 	}
			// })
			// setTimeout(() => {
			// 	this.map.moveToLocation({
			// 		longitude: 117,
			// 		latitude: 41,
			// 		success(res) {
			// 			console.log('moveToLocation success', res)
			// 		},
			// 		fail(err) {
			// 			console.log('moveToLocation falil', err)
			// 		},
			// 		complete(res) {
			// 			console.log('moveToLocation complate', res)
			// 		}
			// 	})
			// }, 1000)

			// this.map.getRegion({
			// 	success(res) {
			// 		console.log('getRegion success', res)
			// 	},
			// 	fail(err) {
			// 		console.log('getRegion falil', err)
			// 	},
			// 	complete(res) {
			// 		console.log('getRegion complate', res)
			// 	}
			// })

			// this.map.getScale({
			// 	success(res) {
			// 		console.log('getScale success', res)
			// 	},
			// 	fail(err) {
			// 		console.log('getScale falil', err)
			// 	},
			// 	complete(res) {
			// 		console.log('getScale complate', res)
			// 	}
			// })
		},
		methods: {
			mapTap(e) {
				console.log('map tap vue2', e);
				uni.showLoading({
					title:'map tap'
				})
				setTimeout(() => {
					uni.hideLoading()
				},500)
			},
			mapClick(e) {
				console.log('map click vue2', e);
				uni.showLoading({
					title:'map click'
				})
				setTimeout(() => {
					uni.hideLoading()
				},500)
			},
			markerTap(e) {
				console.log('marker tap vue2', e)
				const markerId = e.detail.markerId
			},
			mapRegionchange(e) {
				console.log('map regionchange', e);
			},
			controlTap(e) {
				console.log('control tap', e);
			},
			callouttap(e) {
				console.log('callouttap', e);
			},
			onUpdated(e) {
				console.log('on updated', e);
			},
			labelTap(e) {
				console.log('label tap', e)
			},
			changeLatLng() {
				this.latitude = 39.91
				this.longitude = 116.40
				// this.mapKey = Date.now()
			},
			removeControls(){
				this.controls = []
			},
			addControls(){
				const len = this.controls.length
				const nextLen = len+1
				console.log('nextLen',nextLen);
				this.controls.push({
					id: nextLen,
					position: {
						left: 20*nextLen,
						top: 180,
						width: 30,
						height: 30
					},
					iconPath: '/static/voice.png',
					clickable: !!(nextLen%2)
				})
			},
			changeControl(){
				this.controls.forEach(item => {
					item.position.left += 10
					item.position.height += 5
					item.position.width += 5
				})
			}
		}
	}
</script>
<style>
	.map {
		width: 750rpx;
		height: 300px;
	}
</style>
