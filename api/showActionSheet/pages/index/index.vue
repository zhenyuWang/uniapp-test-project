<template>
	<view class="content">
		<button @click="showModal">showModal</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
      showModal(){
        uni.showActionSheet({
          title:'title test title test title test title test title test title test title test title test title test title test title test title test title test title test title test title test title',
          alertText: 'my alertText',
          itemList:['1 test title test title test title test title test title test title test title test title test title test title test title test title test title test title test title test title','2','3'],
          itemColor:'#0000ff',
          success: function (res) {
            console.log('success', res)
          },
          fail: function (err) {
            console.log('fail', err)
          },
          complete: function (res) {
            console.log('complete', res)
          }
        })
      }
		}
	}
</script>
