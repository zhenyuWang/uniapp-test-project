<script setup>
import { ref, h } from 'vue'
const msg = ref('default msg')
const render = () => (
  h('div', { class: 'page' }, [
    h(
      'div',
      { class: 'uni-common-mt msg', style: { color: 'blue' } },
      msg.value
    ),
    h(
      'button',
      {
        class: 'uni-common-mt btn',
        type: 'primary',
        onClick: () => {
          msg.value += '1'
        },
      },
      'click'
    ),
  ])
)
</script>

<template>
  <render />
</template>
<style>
.btn {
  color: red;
}
</style>
<!-- 
<script>
import { ref, h } from 'vue'
export default {
  setup() {
    const msg = ref('default msg')
    return () => {
      return h('div', { class: 'page' }, [
        h(
          'div',
          { class: 'uni-common-mt msg', style: { color: 'blue' } },
          msg.value
        ),
        h(
          'button',
          {
            class: 'uni-common-mt btn',
            type: 'primary',
            onClick: () => {
              msg.value = msg.value + '1'
            },
          },
          'click'
        ),
      ])
    }
  },
}
</script>

<style>
.btn {
  color: red;
}
</style> -->
