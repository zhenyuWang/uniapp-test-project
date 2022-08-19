<template>
	<view>
		<button open-type="share" @openshare="onOpenShare">share 微信 QQ 钉钉 百度 字节 飞书 京东 360 快手</button>
		<button open-type="getUserInfo" @getuserinfo="onGetUserInfo">getUserInfo 微信 QQ 百度 京东 360 快手</button>
		<button open-type="launchApp" @error="onLaunchAppError" @launchapp="onLaunchApp">launchApp 微信 QQ 京东 快手</button>
		<button open-type="openSetting" @opensetting="onOpenSetting">openSetting 微信 QQ 百度 京东 360 快手</button>
		<button open-type="feedback">feedback 微信 QQ</button>
		<button open-type="openGroupProfile">openGroupProfile ? QQ</button>
		<button open-type="openGuildProfile">openGuildProfile ? QQ</button>
		<button open-type="contact" @contact="onContact">contact 微信 QQ 百度 字节 快手</button>
		<button open-type="addFriend" @addfriend="onAddFriend">addFriend QQ</button>
		<button open-type="addColorSign">addColorSign QQ</button>
		<button open-type="openPublicProfile">openPublicProfile QQ</button>
		<button open-type="addGroupApp" @addgroupapp="onAddgroupapp">addGroupApp QQ</button>
		<button open-type="shareMessageToFriend" share-message-title="my share message title" share-message-img="https://z3.ax1x.com/2020/12/07/Dv6FiT.jpg">shareMessageToFriend QQ</button>
		<button open-type="addToFavorites">addToFavorites QQ</button>
		<button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">getPhoneNumber 微信 百度 字节 京东 快手 支付宝</button>
		<button open-type="chooseAvatar" @chooseavatar="onChooseAvatar">chooseAvatar 微信</button>
		<button open-type="contactShare">contactShare 支付宝</button>
		<button open-type="lifestyle" @FollowLifestyle="onFollowLifestyle">lifestyle 支付宝</button>
		<button open-type="chooseAddress" @chooseAddress='onChooseAddress'>chooseAddress 百度</button>
		<button open-type="chooseInvoiceTitle">chooseInvoiceTitle 百度</button>
		<button open-type="login" @login="onLogin">login 百度</button>
		<button open-type="subscribe" @subscribe="onSubscribe">subscribe 百度</button>
		<button open-type="favorite">favorite 快手</button>
		<button open-type="watchLater">watchLater 快手</button>
		<button open-type="openProfile">openProfile 快手</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onReady() {
		},
		// #ifdef MP-QQ
		onAddToFavorites() {
			console.log('QQ on add to favorites');
		},
		// #endif
		onShareAppMessage(){
			console.log('on share app message')
			return {
			  title : '分享 View 组件' ,
			  desc : 'View 组件很通用' ,
			  path : 'page/component/view/view'
			}
		},
		methods: {
			testMouseUp(){
				console.log('test mouse up');
			},
			testMouseDown(){
				console.log('test mouse down');
			},
			onOpenShare(e) {
				console.log('360 onOpenShare', e)
			},
			onGetUserInfo(res){
				console.log('微信 QQ 百度 360 京东 快手 get user info',res);
			},
			onLaunchAppError(){
				console.log('微信 QQ 京东 快手 launch app error');
			},
			onLaunchApp(){
				console.log('微信 QQ 快手 on launch app success');
			},
			onOpenSetting(){
				console.log('微信 QQ 百度 京东 快手 360 on open setting');
			},
			onContact(){
				console.log('微信 QQ 百度 快手 on contact');
			},
			onAddFriend(){
				console.log('QQ on add friend');
			},
			onAddgroupapp(){
				console.log('QQ on addgroupapp');
			},
			onGetPhoneNumber(res){
				console.log('微信 百度 字节 京东 快手 支付宝 on get phone number',res);
				uni.showToast({
					title:res.detail.errMsg
				})
			},
			onChooseAvatar(res){
				console.log('微信 on choose avatar',res);
			},
			onGetAuthorize(res){
				console.log('支付宝 on get authorize',res);
			},
			onGetAuthorizeError(){
				console.log('支付宝 on get authorize error');
			},
			onFollowLifestyle(e){
				console.log('支付宝 on follow life style',e);
			},
			onChooseAddress(e){
				console.log('百度 on choose address',e);
			},
			onLogin(e){
				console.log('百度 on login',e);
			},
			onSubscribe(res){
				console.log('百度 on subscribe',res);
			}
		}
	}
</script>

<style>

</style>
