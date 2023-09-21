<template>
	<view>
		<text class="bg">data: {{ data }}</text>
		<slot name="header" :msg="msg"></slot>
		<slot msg="default slot msg">插槽后备内容</slot>
		<Bar>
			<text class="bg">class bg in Bar slot</text>
		</Bar>
	</view>
</template>

<script lang="uts">
	import Bar from './Bar'
	import type { PropType, SlotsType } from 'vue'
	type Obj = { a: number }
	export default {
		name: "Foo",
		components: { Bar },
		slots: Object as SlotsType<{
			default: {msg: string},
			header: {msg: string}
		}>,
		props: {
			data: {
				type: String
			},
			num: {
				type: Number,
				required: true,
				default: 0
			},
			str: {
				type: String,
				required: false,
				default: 'str',
				validator(value : string) : boolean {
					return value.length > 0
				}
			},
			obj: {
				type: Object as PropType<Obj>,
				required: false,
				default: () : Obj => ({ a: 1 } as Obj)
			},
			arr: {
				type: Array as PropType<number[]>,
				required: false,
				default: () : number[] => [1, 2, 3]
			},
		},
		data() {
			return {
				msg: 'header slot msg'
			};
		},
		methods: {
				handler(){
					console.warn('foo method handler')
				}
		}
	}
</script>
<style>
	.bg {
		background-color: blue;
	}
</style>