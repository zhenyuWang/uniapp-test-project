// jest.setTimeout(20000)
describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		await page.waitFor(1000)
	})
	// it('component childDom text', async () => {
	// 	const component = await page.$('.component-foo')
	// 	const textDom = await component.$('#foo-text')
	// 	const text = await textDom.text()
	// 	expect(text).toEqual('title is foo title')
	// })
	// it('checkbox', async () => {
	// 	const checkbox = await page.$('.test-checkbox1')
	// 	const checked = await checkbox.property('checked')
	// 	expect(checked).toEqual(true)
	// })
	// it('progress', async () => {
	// 	const progress = await page.$('.progress')
	// 	console.log('progress', progress)
	// 	const strokeWidth1 = await progress.property('stroke-width')
	// 	expect(strokeWidth1).toEqual(3)
	// 	const strokeWidth2 = await progress.property('strokeWidth')
	// 	expect(strokeWidth2).toEqual(3)
	// })


	// it('page.$', async () => {
	// 	const myTest = await page.$('.my-test')
	// 	console.log('myTest', myTest)
	// })
	// it('page.$$', async () => {
	// 	const myTests = await page.$$('.my-test')
	// 	console.log('myTests', myTests)
	// })
	// it('page.callMethod', async () => {
	// 	page.callMethod('getStorageInfo')
	// })
	// it('element.$', async () => {
	// 	const myTest = await page.$('.my-test')
	// 	const testChild = await myTest.$('.test-child')
	// 	console.log('testChild', testChild)
	// })
	// it('element.$$', async () => {
	// 	const myTest = await page.$('.my-test')
	// 	const testChilds = await myTest.$$('.test-child')
	// 	console.log('testChilds', testChilds)
	// })
	// it('element.text', async () => {
	// 	// const element = await page.$('.test-child')
	// 	// const element = await page.$('.test-view')
	// 	const element = await page.$('.test-button')
	// 	let text = await element.text()
	// 	const data = await page.data()
	// 	expect(text).toEqual(data.title)
	// })
	// it('element.value', async () => {
	// 	const myInput = await page.$('.my-input')
	// 	const value = await myInput.value()
	// 	const data = await page.data()
	// 	expect(value).toEqual(data.title)
	// })
	// it('element.input', async () => {
	// 	const myInput = await page.$('.my-input')
	// 	const inputValue =  Date.now() + ''
	// 	await myInput.input(inputValue)
	// 	const newValue = await myInput.value()
	// 	expect(newValue).toEqual(inputValue)
	// })
	// it('element.tap', async () => {
	// 	const myTest = await page.$('.my-test')
	// 	await myTest.tap()
	// 	const data = await page.data()
	// 	expect(data.title).toEqual('automatorTap')
	// })
	// it('element.tap for component', async () => {
	// 	const component = await page.$('Foo')
	// 	await component.tap()
	// 	const data = await page.data()
	// 	expect(data.title).toEqual('automatorTap')
	// })
	// it('element.callMethod', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	console.warn('componentFoo',componentFoo)
	// 	await componentFoo.callMethod('fooTest')
	// })
	// it('element.data', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	const data = await componentFoo.data()
	// 	expect(data.title).toEqual('foo title')
	// })

	// it('element.setData', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	await componentFoo.setData({title: 'new foo title'})
	// 	const data = await componentFoo.data()
	// 	expect(data.title).toEqual('new foo title')
	// })
	// it('element.size for element', async () => {
	// 	const element = await page.$('.my-test')
	// 	const {width, height} = await element.size()
	// 	expect(typeof width).toBe('number');
	// 	expect(typeof height).toBe('number');
	// 	expect(width).toBeGreaterThan(0)
	// 	expect(height).toBeGreaterThan(0)
	// })
	// it('element.size for component', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	const {width, height} = await componentFoo.size()
	// 	expect(typeof width).toBe('number');
	// 	expect(typeof height).toBe('number');
	// 	expect(width).toBeGreaterThan(0)
	// 	expect(height).toBeGreaterThan(0)
	// })
	// it('element.offset', async () => {
	// 	const element = await page.$('.my-input')
	// 	const { left, top } = await element.offset()
	// 	expect(typeof left).toBe('number');
	// 	expect(typeof top).toBe('number');
	// })
	// it('element.longpress', async () => {
	// 	const element = await page.$('.my-test')
	// 	await element.longpress()
	// })
	// it('element.longpress for component', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	await componentFoo.longpress()
	// })
	// it('element.touchstart', async () => {
	// 	const element = await page.$('.my-test')
	// 	await element.touchstart({
	// 		touches: [{
	// 			identifier: 1,
	// 			pageX: 500,
	// 			pageY: 500
	// 		}],
	// 		changedTouches: [{
	// 			identifier: 1,
	// 			pageX: 500,
	// 			pageY: 500
	// 		}]
	// 	})
	// })
	// it('element.touchmove', async () => {
	// 	const element = await page.$('.my-test')
	// 	await element.touchmove({
	// 		touches: [{
	// 			identifier: 1,
	// 			pageX: 500,
	// 			pageY: 500
	// 		}],
	// 		changedTouches: [{
	// 			identifier: 2,
	// 			pageX: 500,
	// 			pageY: 510
	// 		}]
	// 	})
	// })
	// it('element.touchend', async () => {
	// 	const element = await page.$('.my-test')
	// 	await element.touchend({
	// 		touches: [],
	// 		changedTouches: [{
	// 			identifier: 2,
	// 			pageX: 500,
	// 			pageY: 510
	// 		}]
	// 	})
	// })
	// it('element.attribute', async () => {
	// 	const element = await page.$('.logo')
	// 	const src = await element.attribute('src')
	// 	expect(src).toEqual('/static/logo.png')
	// })
	// it('element.property', async () => {
	// 	const element = await page.$('.my-input')
	// 	const value = await element.property('value')
	// 	const data = await page.data()
	// 	expect(value).toEqual(data.title)
	// })

	// it('element.property for component', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	const componentFooTest = await componentFoo.property('test')
	// 	expect(componentFooTest).toEqual('foo-test-attribute')
	// 	const componentFooClass = await componentFoo.attribute('class')
	// 	expect(componentFooClass).toEqual('component-foo')

	// 	const myButton1 = await page.$('Button')
	// 	const button1Type = await myButton1.property('type')
	// 	const button1Class = await myButton1.attribute('class')
	// 	expect(button1Type).toEqual('primary')
	// 	expect(button1Class).toEqual('ub ub-p test-button')

	// 	const myButton2 = await page.$('.test-button')
	// 	const button2Type = await myButton2.property('type')
	// 	const button2Class = await myButton2.attribute('class')
	// 	expect(button2Type).toEqual('primary')
	// 	expect(button2Class).toEqual('ub ub-p test-button')
	// })

	// it('element.style', async () => {
	// 	const element = await page.$('.my-input')
	// 	const color = await element.style('color')
	// 	expect(color).toEqual('#FF0000')
	// })
	// it('element.style for component', async () => {
	// 	const component = await page.$('Foo')
	// 	const color = await component.style('color')
	// 	expect(color).toEqual('#FF0000')
	// })


	// it('Page.getData', async () => {
	// 	const data = await page.data()
	// 	console.log('data', data)
	// 	expect(data.title).toEqual('automatorTap')
	// })
	// it('Page.setData', async () => {
	// 	await page.setData({
	// 		title: '222'
	// 	})
	// 	const data = await page.data()
	// 	console.log('data', data)
	// 	expect(data.title).toEqual('222')
	// })
	// it('screenshot', async () => {
	// 	// const image = await program.screenshot({fullPage: true})
	// 	const image = await program.screenshot()
	// 	expect(image).toMatchImageSnapshot();
	// })
	// it('uni.xxx not exists', async () => {
	// 	const res2 = await uni.aaaa({
	// 		complete(res) {
	// 			console.log('uni.aaaa', res)
	// 		}
	// 	})
	// 	console.log('res2', JSON.stringify(res2))
	// 	expect(res2.errMsg).toEqual('uni.aaaa not exists.')
	// })


	// it('uni.setStorage', async () => {
	// 	await uni.setStorage({
	// 		key: 'storage_key1',
	// 		data: 'hello',
	// 		success(res) {
	// 			console.log('setStorage success', res)
	// 		}
	// 	})
	// 	const res1 = await uni.getStorage({
	// 		key: 'storage_key1',
	// 		success(res) {
	// 			console.log('getStorage success:', res)
	// 			expect(res.data).toEqual('hello')
	// 		},
	// 		fail(e) {
	// 			console.log('getStorage fail:', e)
	// 		},
	// 		complete(res) {
	// 			console.log('getStorage complete:', res)
	// 		}
	// 	});
	// 	expect(res1.data).toEqual('hello')
	// })
	// it('uni.setStorageSync', async () => {
	// 	await uni.setStorageSync('storage_key2', 'hello222');
	// 	const res3 = await uni.getStorageSync('storage_key2');
	// 	expect(res3).toEqual('hello222')
	// })
	// it('uni.getStorageInfo', async () => {
	// 	await uni.getStorageInfo({
	// 		success: function(res) {
	// 			expect(res.currentSize).toEqual(28)
	// 			expect(res.keys[0]).toEqual('storage_key1')
	// 			expect(res.keys[1]).toEqual('storage_key2')
	// 		},
	// 		fail: function(err) {
	// 			console.log('getStorageInfo fail', err);
	// 		},
	// 		complete: function(res) {
	// 			console.log('getStorageInfo complete', res);
	// 		}
	// 	});
	// })
	// it('uni.getStorageInfoSync', async () => {
	// 	const storageInfo = await uni.getStorageInfoSync();
	// 	expect(storageInfo.keys[0]).toEqual('storage_key1')
	// 	expect(storageInfo.keys[1]).toEqual('storage_key2')
	// })
	// it('uni.removeStorageSync', async () => {
	// 	await uni.removeStorageSync('storage_key1')
	// 	const storageInfo = await uni.getStorageInfoSync();
	// 	expect(storageInfo.keys[0]).toEqual('storage_key2')
	// 	expect(storageInfo.keys.length).toEqual(1)
	// })
	// it('uni.clearStorageSync', async () => {
	// 	await uni.clearStorageSync()
	// 	const storageInfo = await uni.getStorageInfoSync();
	// 	expect(storageInfo.keys.length).toEqual(0)
	// })
	// it('uni.clearStorage', async () => {
	// 	await uni.setStorageSync('storage_key2', 'hello222');
	// 	const data = await uni.getStorageSync('storage_key2');
	// 	expect(data).toEqual('hello222')
	// 	await uni.clearStorage()
	// 	page.waitFor(1000)
	// 	const storageInfo = await uni.getStorageInfoSync();
	// 	expect(storageInfo.keys.length).toEqual(0)
	// })
	it('uni.clearStorage', async () => {
		uni.clearStorage({
			success(res){
				console.log('clearStorage success', res);
			},
			fail(res){
				console.log('clearStorage fail', res);
			},
		})
		return new Promise((resolve) => {
				setTimeout(() => {
					resolve()
				}, 3000)
			})
	})


	// it('uni.switchTab', async () => {
	// 	await uni.switchTab({
	// 		url: '/pages/test/test'
	// 	})
	// })
	// it('program.switchTab', async () => {
	// 	await program.switchTab('/pages/test/test')
	// })
	// it('uni.showToast', async () => {
	// 	uni.showToast({
	// 		title: 'this is toast',
	// 		icon: 'error',
	// 		image: '/static/logo.png',
	// 		mask: true,
	// 		duration: 5000,
	// 		// position: 'bottom',
	// 		success() {
	// 			console.warn('showToast success')
	// 		},
	// 		fail() {
	// 			console.warn('showToast fail')
	// 		},
	// 		complete() {
	// 			console.warn('showToast complete')
	// 		}
	// 	})
	// 	setTimeout(() => {
	// 		uni.hideToast()
	// 	}, 2000)
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		}, 3000)
	// 	})
	// })


	// it('uni.showLoading', async () => {
	// 	uni.showLoading({
	// 		title: 'this is loading',
	// 		// mask: true,
	// 		success() {
	// 			console.warn('showLoading success')
	// 		},
	// 		fail() {
	// 			console.warn('showLoading fail')
	// 		},
	// 		complete() {
	// 			console.warn('showLoading complete')
	// 		}
	// 	})
	// 	setTimeout(() => {
	// 		uni.hideLoading()
	// 	},5000)
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		},6000)
	// 	})
	// })

	// it('uni.showModal', async () => {
	// 	uni.showModal({
	// 		title: 'this is modal title',
	// 		content: 'this is modal content',
	// 		cancelText: 'my cancel',
	// 		cancelColor: '#007aff',
	// 		confirmText: 'my confirm',
	// 		confirmColor: '#4cd964',
	// 		editable: true,
	// 		placeholderText: 'my placeholder',
	// 		success(res) {
	// 			console.warn('showModal success',res)
	// 		},
	// 		fail(err) {
	// 			console.warn('showModal fail', err)
	// 		},
	// 		complete(res) {
	// 			console.warn('showModal complete', res)
	// 		}
	// 	})
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		},6000)
	// 	})
	// })

	// it('uni.showActionSheet', async () => {
	// 	uni.showActionSheet({
	// 		title: 'showActionSheet title',
	// 		itemList: ['A', 'B', 'C'],
	// 		itemColor: '#007aff',
	// 		success(res) {
	// 			console.warn('showActionSheet success',res)
	// 		},
	// 		fail(err) {
	// 			console.warn('showActionSheet fail', err)
	// 		},
	// 		complete(res) {
	// 			console.warn('showActionSheet complete', res)
	// 		}
	// 	})
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		},3000)
	// 	})
	// })


	// it('uni.connectSocket', async () => {
	// 	const socketTask = await uni.connectSocket({
	// 		// url: 'ws://192.168.31.119:8080',
	// 		url: 'ws://192.168.12.106:8080/ws',
	// 		success(res) {
	// 			expect(res.errMsg).toEqual('connectSocket:ok')
	// 		},
	// 		fail(err) {
	// 			console.warn('connectSocket fail', err)
	// 			expect(err.errMsg).toEqual('connectSocket:fail')
	// 		}
	// 	})
	// 	console.warn('socketTask', socketTask)
	// 	socketTask.onOpen(res => {
	// 		console.log('socketTask.onOpen', res)
	// 		socketTask.onMessage((res) => {
	// 			expect(res).toHaveProperty('data');
	// 		})
	// 		socketTask.send({
	// 			data: 'hahaha from client in socketTask.onOpen',
	// 			success(res) {
	// 				expect(res.errMsg).toEqual('sendSocketMessage:ok')
	// 			},
	// 			fail(err) {
	// 				expect(err.errMsg.length).toBeGreaterThan(0)
	// 			},
	// 			complete(res) {
	// 				expect(res.errMsg).toEqual('sendSocketMessage:ok')
	// 			}
	// 		})
	// 		socketTask.close({
	// 			code: 1000,
	// 			reason: 'close from automator PC',
	// 			success(res) {
	// 				expect(res.errMsg).toEqual('closeSocket:ok')
	// 			},
	// 			fail(err) {
	// 				expect(err.errMsg.length).toBeGreaterThan(0)
	// 			},
	// 			complete(res) {
	// 				expect(res.errMsg).toEqual('closeSocket:ok')
	// 			}
	// 		})
	// 	})
	// 	socketTask.onClose((res) => {
	// 		expect(res.code).toEqual(1000)
	// 	})
	// 	socketTask.onError((err) => {
	// 		expect(err.errMsg.length).toBeGreaterThan(0)
	// 	})

	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		}, 3000)
	// 	})
	// })


	// it('uni.getSystemInfo', async () => {
	// 	await uni.getSystemInfo({
	// 		complete(res) {
	// 			expect(res.appId.length).toBeGreaterThan(0)
	// 		}
	// 	})
	// })
	// it('uni.getSystemInfoSync', async () => {
	// 	const result = await uni.getSystemInfoSync()
	// 	expect(result.appId.length).toBeGreaterThan(0)
	// })
	// it('uni.getAppBaseInfo', async () => {
	// 	const result = await uni.getAppBaseInfo()
	// 	expect(result.appId.length).toBeGreaterThan(0)
	// })
	// // it('uni.getDeviceInfo', async () => {
	// // 	const result = await uni.getDeviceInfo()
	// // 	console.log('getDeviceInfo',result)
	// // 	expect(result.deviceId.length).toBeGreaterThan(0)
	// // })
	// it('uni.getAppAuthorizeSetting', async () => {
	// 	const result = await uni.getAppAuthorizeSetting()
	// 	expect(result.cameraAuthorized.length).toBeGreaterThan(0)
	// })
	// it('uni.openAppAuthorizeSetting', async () => {
	// 	await uni.openAppAuthorizeSetting({
	// 		complete(res) {
	// 			expect(typeof res.errMsg).toEqual('string')
	// 		}
	// 	})
	// })
	// it('callMethodWithCallback', () => {
	// 客户端修改了JSON.parse JSON.stringify 实现后导致传入的 args 无法 as 为 Array 无法调用数组 push 方法
	// 且因为已支持 uni.api 调用,故该功能暂时弃用
	// 	page.callMethodWithCallback('getStorageInfo')
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		},2000)
	// 	})
	// 	// page.callMethodWithCallback('getStorageInfo222')
	// })
})