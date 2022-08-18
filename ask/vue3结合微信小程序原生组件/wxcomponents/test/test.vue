<template>
<uni-shadow-root class="test-test"><view>
	<button>{{name.text}}</button>
</view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'test/test'
Component({  
    properties:{  
        name: {  
            type: Object,  
            observer: function(newVal, oldVal) {  
                console.log(newVal)  
            }  
        }  
    }  
})
export default global['__wxComponents']['test/test']
</script>
<style platform="mp-weixin">

</style>