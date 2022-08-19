<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		</uni-card>

		<uni-section title="表单校验" type="line">
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" err-show-type="toast">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item  name="email" label="邮箱" required>
						<uni-easyinput v-model="valiFormData.email" placeholder="请输入邮箱" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required name="hobby">
						<uni-data-checkbox v-model="valiFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍" name="introduction">
						<uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">提交</button>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 校验表单数据
				valiFormData: {
					name: '',
					email: '',
					age: null,
					hobby:[],
					introduction: '',
				},
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					email: {
						rules: [{
							required: true,
							errorMessage: '邮箱不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					},
					hobby: {
						rules: [{
							required: true,
							errorMessage: '请选择兴趣',
						}]
					},
				},
				hobbys: [{
					text: '跑步',
					value: 0
				}, {
					text: '游泳',
					value: 1
				}, {
					text: '绘画',
					value: 2
				}, {
					text: '足球',
					value: 3
				}, {
					text: '篮球',
					value: 4
				}, {
					text: '其他',
					value: 5
				}],
			}
		},
		onLoad() {},
		methods: {
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
		}
	}
</script>

<style lang="scss">

	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
</style>
