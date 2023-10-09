<template>
  <list-item>封装后的 list-item: {{ string }}</list-item>
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
