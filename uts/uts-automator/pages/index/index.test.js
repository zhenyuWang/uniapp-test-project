jest.setTimeout(20000)
describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		await page.waitFor('view')
	})
	
	// am start -n io.dcloud.uniappx/io.dcloud.uniapp.UniAppActivity --es appid __UNI__AE9EF0B --ez needUpdateApp false --ez reload true --ez externalStorage true
	// it('call async fun', async () => {
	// 	const res = await page.callMethod('myTest')
	// 	console.log('res', res, typeof res, res.name,res.age)
	// })
	
	// it('$', async () => {
	// 	const myText = await page.$('.myText')
	// 	const text = await myText.text()
	// 	console.log('text', text)
	// })
	
	// it('adbCommand', async () => {
		// const res = await program.adbCommand('dumpsys activity | grep "Run"')
		// const res = await program.adbCommand('logcat')
		// const res = await program.adbCommand('input swipe 100 500 100 200 500')
		// console.log('adbCommand-----------', res)
		// const res = await page.$('.content')
		// console.log('res', res)
	// })

	// it('mathematical calculation', async () => {
	// 	const test1 = await page.callMethod('test1')
	// 	console.log('test1---------', test1)
	// 	const test2 = await page.callMethod('test2')
	// 	console.log('test2---------', test2)            
	// })

	// it('touch', async () => {
	// 	const testTouch = await page.$('.testTouch')
	// 	await testTouch.touchmove({
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
	// it('page.data', async () => {
	// 	const {num} = await page.data()
	// 	console.log('num', num)
	// 	expect(1+1).toEqual(2)
	// })

	// it('program.systemInfo', async () => {
	// 	const systemInfo = await program.systemInfo()
	// 	expect(systemInfo.appId.startsWith('__UNI__')).toEqual(true)
	// })
	// it('program.pageScrollTo', async () => {
	// 	await program.pageScrollTo(200)
	// })
	// it('page.scrollTop', async () => {
	// 	const scrollTop = await page.scrollTop()
	// 	expect(scrollTop).toEqual(200)
	// })
	// it('page.size', async () => {
	// 	const {width, height} = await page.size()
	// 	console.log('width', width, 'height', height)
	// })
	// it('element.scrollWidth and scrollHeight', async () => {
	// 	const element = await page.$('.content')
	// 	const scrollWidth = await element.scrollWidth()
	// 	console.log(scrollWidth)
	// 	const scrollHeight = await element.scrollHeight()
	// 	console.log(scrollHeight)
	// })
	// it('element.scrollTo', async () => {
	// 	const content = await page.$('.content')
	// 	content.scrollTo({x: 0, y: 100})
	// })
	// it('element.swipeTo', async () => {
	// 	const swiper = await page.$('.swiper')
	// 	swiper.swipeTo(1)
	// })
	// it('slider.slideTo', async () => {
	// 	const slider = await page.$('.slider')
	// 	console.log('slider', slider)
	// 	slider.setData({sliderValue: 90})
	// 	slider.callMethod('_onRender')
	// })
	
	// it('uni.switchTab', async () => {
	// 	await uni.switchTab({
	// 		url: '/pages/test/test',
	// 		success(res){
	// 			expect(res.errMsg).toEqual('switchTab: ok')
	// 		},
	// 		fail(err){
	// 			console.log('uni.navigateTo fail', err)
	// 		},
	// 		complete(res){
	// 			expect(res.errMsg).toEqual('switchTab: ok')
	// 		}
	// 	})
	// })
	// it('uni.navigateTo', async () => {
	// 	await uni.navigateTo({
	// 		url: '/pages/test/test',
	// 		success(res){
	// 			console.log('uni.navigateTo success', res)
	// 		},
	// 		fail(err){
	// 			console.log('uni.navigateTo fail', err)
	// 			expect(err.message).toEqual('can not navigateTo a tabbar page')
	// 		},
	// 		complete(err){
	// 			expect(err.message).toEqual('can not navigateTo a tabbar page')
	// 		}
	// 	})
	// })

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
	// 	const inputValue = Date.now() + ''
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
	// 	console.warn('componentFoo', componentFoo)
	// 	await componentFoo.callMethod('fooTest')
	// })
	// it('element.data', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	const data = await componentFoo.data('title')
	// 	console.log('element.data', data)
	// 	expect(data).toEqual('foo title')
	// })

	// it('element.setData', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	await componentFoo.setData({
	// 		title: 'new foo title'
	// 	})
	// 	const data = await componentFoo.data()
	// 	expect(data.title).toEqual('new foo title')
	// })
	// it('element.size for element', async () => {
	// 	const element = await page.$('.my-test')
	// 	const {
	// 		width,
	// 		height
	// 	} = await element.size()
	// 	expect(typeof width).toBe('number');
	// 	expect(typeof height).toBe('number');
	// 	expect(width).toBeGreaterThan(0)
	// 	expect(height).toBeGreaterThan(0)
	// })
	// it('element.size for component', async () => {
	// 	const componentFoo = await page.$('Foo')
	// 	const {
	// 		width,
	// 		height
	// 	} = await componentFoo.size()
	// 	expect(typeof width).toBe('number');
	// 	expect(typeof height).toBe('number');
	// 	expect(width).toBeGreaterThan(0)
	// 	expect(height).toBeGreaterThan(0)
	// })
	// it('element.offset', async () => {
	// 	const element = await page.$('.my-input')
	// 	const {
	// 		left,
	// 		top
	// 	} = await element.offset()
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
		// 2.0
		// const data = await page.data('nodes[0].attrs.style')
		// console.log('data', data)
		// expect(data).toEqual('line-height: 60px; color: red; text-align:center;')
		// 1.0
		// const title = await page.data('title')
		// console.log('title', title)
		// expect(title).toEqual('111')
		// const hobby = await page.data('obj.hobby[0]')
		// console.log('hobby', hobby)
		// expect(hobby).toEqual('篮球')
	// })
	// it('Page.setData', async () => {
	// 	await page.setData({
	// 		title: '222'
	// 	})
	// 	const data = await page.data()
	// 	console.log('data', data)
	// 	expect(data.title).toEqual('222')
	// 	const textNode = await page.$('.test-child')
	// 	const text = await textNode.text()
	// 	expect(text).toEqual('222')
	// })
	it('screenshot', async () => {
		// const image = await program.screenshot({fullPage: true})
		const image = await program.screenshot()
		expect(image).toMatchImageSnapshot();
	})
	// it('screenshotWithADB', async () => {
	// 	const image = await program.screenshot({adb: true})
	// 	expect(image).toMatchImageSnapshot();
	// })
	// it('screenshotWithADB with crop', async () => {
	// 	const image = await program.screenshot({adb: true, area:{x:100,y:100,width:1000,height:1000}})
	// 	expect(image).toMatchImageSnapshot();
	// })

	// it('uni.xxx not exists', async () => {
	// 	const res2 = await uni.aaaa({
	// 		fail(err) {
	// 			console.log('uni.aaaa', err)
	// 		},
	// 		complete(res) {
	// 			console.log('uni.aaaa', res)
	// 		}
	// 	})
	// 	console.log('res2', JSON.stringify(res2))
	// 	expect(res2.message).toEqual('uni.aaaa not exists.')
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
	// it('uni.removeStorage', async () => {
	// 	await uni.setStorageSync('storage_key1', 'hello111');
	// 	const storageInfo = await uni.getStorageInfoSync();
	// 	expect(storageInfo.keys.length).toEqual(2)
	// 	await uni.removeStorage({
	// 		key: 'storage_key1',
	// 		success: async (res) => {
	// 			console.log('removeStorage success', res);
	// 			const storageInfo = await uni.getStorageInfoSync();
	// 			expect(storageInfo.keys.length).toEqual(1)
	// 		}
	// 	})

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
	// 	await uni.clearStorage({
	// 		success: async (res) => {
	// 			console.log('uni.clearStorage success', res)
	// 			const storageInfo = await uni.getStorageInfoSync();
	// 			expect(storageInfo.keys.length).toEqual(0)
	// 		}
	// 	})
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
	// 		url: 'ws://192.168.31.83:8080',
	// 		// url: 'ws://192.168.12.106:8080/ws',
	// 		success(res) {
	// 			expect(res.errMsg).toEqual('connectSocket:ok')
	// 		},
	// 		fail(err) {
	// 			console.warn('connectSocket fail', err)
	// 			expect(err.message).toEqual('connectSocket:fail')
	// 		}
	// 	})
	// 	console.warn('socketTask', socketTask)

	// 	await uni.onSocketOpen(async (res1) => {
	// 		console.log('uni.onSocketOpen', res1)
	// 		await uni.sendSocketMessage({
	// 			data: 'message from uni.sendSocketMessage',
	// 			success: async (res2) => {
	// 				console.log('uni.sendSocketMessage success', res2)
	// 				expect(res2.errMsg).toEqual('sendSocketMessage:ok')
	// 				await uni.closeSocket({
	// 					code: 1000,
	// 					reason: 'close from uni.closeSocket in automator',
	// 					success(res3) {
	// 						console.log('uni.closeSocket success', res3)
	// 						expect(res3.errMsg).toEqual('closeSocket:ok')
	// 					},
	// 					fail(err3) {
	// 						console.log('uni.closeSocket fail', err3)
	// 					}
	// 				})
	// 			},
	// 			fail(err2) {
	// 				console.log('uni.sendSocketMessage fail', err2)
	// 			},
	// 		})
	// 	})
	// await uni.onSocketMessage((res) => {
	// 	console.log('uni.onSocketMessage', res)
	// 	expect(res.data).toEqual('this is server')
	// })
	// await uni.onSocketError(async (res) => {
	// 	console.log('uni.onSocketError', res)
	// })
	// await uni.onSocketClose(async (res) => {
	// 	console.log('uni.onSocketClose', res)
	// 	expect(res.code).toEqual(1000)
	// })


	// 	socketTask.onOpen(res => {
	// 	console.log('socketTask.onOpen', res)
	// 	socketTask.onMessage((res) => {
	// 		expect(res).toHaveProperty('data');
	// 	})
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
	// 		}, 9000)
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
	// it('uni.getDeviceInfo', async () => {
	// 	const result = await uni.getDeviceInfo()
	// 	expect(result.deviceModel.length).toBeGreaterThan(0)
	// })
	// it('uni.getSystemSetting', async () => {
	// 	const result = await uni.getSystemSetting()
	// 	expect(typeof result.locationEnabled).toEqual('boolean')
	// })
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
})