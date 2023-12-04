<template>
  <div>Foo: {{title}}</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'default foo title',
    }
  },
  methods: {
    test() {
      console.log('foo testqweqwe')
      this.title = 'new foo title'
    },
  },
}
</script>