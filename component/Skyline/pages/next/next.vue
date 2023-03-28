<template>
	<scale-gesture-handler onGestureEvent="myTest">
		<view id="single-home"
			style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center">
			<share-element key="bill" style="width:300px;height:500px">
				<image class="image" mode="aspectFill"
					src="https://cdn.enshimama.com/wp-content/uploads/gallery/sites/7/2023/03/2-1.webp"
					style="width:100%;height:100%;border-radius:20px" />
			</share-element>
			<text>第二页</text>
		</view>
	</scale-gesture-handler>
</template>

<script>
	const shareData = {
		OPACITY: 1,
		TRANSLATE_Y: 0,
		TRANSLATE_X: 0,
		SCALE: 1,
		MIN_SCALE: 1,
		START_Y: 0
	};
	const screenHeight = wx.getSystemInfoSync().windowHeight;
	console.log('screenHeight', screenHeight)

	function clamp(value, min, max) {
		"worklet";
		return Math.min(max, Math.max(min, value));
	}

	function calcOpacity(moveY, screenHeight2) {
		"worklet";
		const opacityRatio = moveY / (screenHeight2 / 2);
		return clamp((1 - opacityRatio) ** 3, 0, 1);
	}

	function calcScale(moveY, screenHeight2) {
		"worklet";
		const scaleRange = 0.4;
		const scaleRatio = moveY / (screenHeight2 / 3 * 2);
		return clamp(1 - scaleRange * scaleRatio, 0.6, 1);
	}


	shareData.OPACITY = wx.worklet.shared(1);
	shareData.TRANSLATE_X = wx.worklet.shared(0);
	shareData.TRANSLATE_Y = wx.worklet.shared(0);
	shareData.SCALE = wx.worklet.shared(1);
	shareData.MIN_SCALE = wx.worklet.shared(1);
	shareData.START_Y = wx.worklet.shared(0);
	
	let customRouteContext = null
	export default {
		onLoad() {
			const pages = getCurrentPages()
			const self = pages[pages.length - 1]
			customRouteContext = wx.router.getRouteContext(self)
			console.log('customRouteContext', customRouteContext)
		},
		onReady() {
			const pages = getCurrentPages()
			const self = pages[pages.length - 1]
			self.applyAnimatedStyle("#single-home", () => {
				"worklet";
				return {
					transform: `translate(${shareData.TRANSLATE_X.value}px, ${shareData.TRANSLATE_Y.value}px) scale(${shareData.SCALE.value})`
				};
			});
		},
		methods: {
			myTest(evt) {
				"worklet";
				console.log("gestureEvents", evt);
				if ([1].includes(evt.state)) {} else if ([2].includes(evt.state)) {
					evt.focalX;
					const focalY = evt.focalY;
					const moveX = evt.focalDeltaX;
					const moveY = evt.focalDeltaY;
					const offsetY = focalY - shareData.START_Y.value;
					shareData.TRANSLATE_X.value += moveX;
					if (shareData.TRANSLATE_Y.value < 0) {
						const fy = 0.52 * (1 - Math.min(offsetY / screenHeight, 1)) ** 2;
						const translateY = shareData.TRANSLATE_Y.value + Math.ceil(moveY * fy);
						shareData.TRANSLATE_Y.value = translateY;
					} else {
						shareData.TRANSLATE_Y.value += moveY;
					}
					shareData.OPACITY.value = calcOpacity(offsetY, screenHeight);
					const scale = calcScale(offsetY, screenHeight);
					shareData.SCALE.value = scale;
					shareData.MIN_SCALE.value = Math.min(scale, shareData.MIN_SCALE.value);
					console.log("正在缩放，一直缩放会返回", shareData.TRANSLATE_X.value);
				} else if ([3, 4].includes(evt.state)) {
					const {
						didPop
					} = customRouteContext
					const moveY = shareData.TRANSLATE_Y.value;
					const scale = shareData.SCALE.value;
					const minScale = shareData.MIN_SCALE.value;
					if (moveY > 1 && scale <= minScale + 0.01) {
						console.log("准备返回");
						didPop()
					} else {
						console.log("准备还原");
						shareData.OPACITY.value = wx.worklet.timing(1);
						shareData.TRANSLATE_X.value = wx.worklet.timing(0);
						shareData.TRANSLATE_Y.value = wx.worklet.timing(0);
						shareData.SCALE.value = wx.worklet.timing(1);
						shareData.MIN_SCALE.value = 1;
					}
				}
			}
		}
	}
</script>