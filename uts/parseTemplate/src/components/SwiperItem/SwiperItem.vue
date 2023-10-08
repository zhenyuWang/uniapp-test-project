<template>
  <swiper-item>封装后的 swiper-item: {{ string }}</swiper-item>
</template>

<script>
export default {
  props: {
    string: {
      type: String,
      default: 'default string',
    },
  },
}
</script>
