<template>
  <view>
    <input type="text" v-model="title" placeholder="please input" />
    <input type="text" v-model.lazy.trim="title" placeholder="lazy" />
    <textarea v-model="title" placeholder="please input" />
    <text>{{ title }}</text>
    <Foo :title="title" />
    <input v-model.number="num" />
    <text>num: {{ num }}</text>
  </view>
</template>

<script>
import Foo from '../../components/Foo/Foo.vue'
export default {
  components: { Foo },
  data() {
    return {
      title: 'Hello123',
      num: 0,
    }
  },
}
</script>
