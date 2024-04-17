<template>
  <view>
    <Foo class="testA">测试A</Foo>
    <Foo v-slot="scope">
      测试B {{scope.age}}
    </Foo>
    <Foo>
      <template #default="scope">
        测试C {{ scope.age }}
      </template>
    </Foo>
  </view>
</template>

<script>
  import Foo from './Foo.vue'
  export default {
    components: {
      Foo
    },
  }
</script>