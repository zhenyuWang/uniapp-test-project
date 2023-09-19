<template>
  <view>
    <text>this is Foo component</text>
    <text>msg: {{ msg }}</text>
    <text>arr: {{ arr }}</text>
    <slot msg="default slot msg"></slot>
    <slot name="header" msg="header slot msg" :age="18"></slot>
  </view>
</template>

<script>
import type {PropType} from 'vue'
export type ItemType = { value: number; name: string }
	type MyObj = {
		message: string
	}
export default {
  slots: Object as SlotsType<{
    default: { msg: string },
    header: { msg: string, age: number, num?: number | null }
  }>,
  props: {
    msg: {
      type: String,
      default: 'default msg'
    },
    arr: {
      type: Array as PropType<number[]>,
      default: (params: Map<string, any | null>): number[] => {
        return [1, 2, 3]
      },
    },
    obj: {
      type: Object as PropType<MyObj>,
      required: false,
      default: function (): MyObj {
        return { message: 'hello' } as MyObj
      }
    }
  }
}
</script>
