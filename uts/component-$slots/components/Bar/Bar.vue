<template>
  <view>
    <text>this is Bar component</text>
  </view>
</template>

<script>
export default {
	data(){
		return {
			name: 'name is Bar'
		}
	},
  methods: {
    test() {
     console.log('test in bar')
    }
  }
}
</script>
