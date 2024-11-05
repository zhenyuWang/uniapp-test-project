<template>
	<view class="content">
		<button @click="myShowActionSheet">myShowActionSheet</button>
		<button @click="myShowModal">myShowModal</button>
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
      uni.onThemeChange(res => console.log('my onThemeChange', res))
		},
		methods: {
      myShowActionSheet(){
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
        setTimeout(() => {
          // uni.showActionSheet({
          //   itemList:['1','2','3'],
          //   itemColor:'#0000ff',
          //   success: function (res) {
          //     console.log('success', res)
          //   },
          //   fail: function (err) {
          //     console.log('fail', err)
          //   },
          //   complete: function (res) {
          //     console.log('complete', res)
          //   }
          // })
          uni.navigateBack()
        }, 3000)
      },
      myShowModal(){
        uni.showModal({
          title:'111',
          showCancel: true
        })
        setTimeout(() => {
          uni.showModal({
            title:'222'
          })
        },3000)
      }
		}
	}
</script>
