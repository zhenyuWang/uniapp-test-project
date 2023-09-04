// jest.setTimeout(30000);
describe('pages/index/index', () => {
	let page
	beforeAll(async () => {
		page = await program.reLaunch('/pages/index/index')
		await page.waitFor(1000)
	})
	// it('test', async () => {
	// 	const originPageNum = await program.pageStack()
	// 	console.log('originPageNum', originPageNum)
	// 	expect(1+1).toEqual(2)
	// })
	it('element.html', async () => {
		const mytest = await page.data()
		// const myHtml = await mytest.html()
		// console.log('element.html', myHtml)
		expect(1+1).toEqual(2)
	})
	// it('uni.api', async () => {
	// 	// const inputs = [{
	// 	//   "filter": ["abc"]
	// 	// }];
	// 	// const res = await uni.getAppBaseInfo(...inputs)
	// 	// const res = await uni.getAppBaseInfo()
	// 	// console.warn('getAppBaseInfo res', res)
	// 	uni.getBatteryInfo({
	// 		complete(res){
	// 			console.warn('uni.getBatteryInfo res', res)Í
	// 		}
	// 	})
	// })
	// it('page.$', async () => {
	// 	const myTest1 = await page.$('.mytest')
	// 	console.log('myTest1', myTest1)
	// 	// const myTest2 = await page.$('#mytest')
	// 	// console.log('myTest2', myTest2)
	// 	return new Promise(resolve => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		},3000)
	// 	})
	// })
	// it('css', async () => {
	// 	// const image = await program.screenshot({fullPage: true})
	// 	const image = await program.screenshot()
	// 	expect(image).toMatchImageSnapshot();
	// })
	// it('methodWithCallback', () => {
	// 	// page.callMethodWithCallback('getStorageInfo')
	// 	page.callMethodWithCallback('getStorageInfo222')
	// })
	// it('onKeyboardHeightChange', () => {
	// 	const fn1 = (res) => {
	// 		console.log('fn1 res.height',res.height)
	// 	}
	// 	const fn2 = (res) => {
	// 		console.log('fn2 res.height',res.height)
	// 	}
	// 	uni.onKeyboardHeightChange(fn1)
	// 	uni.onKeyboardHeightChange(fn2)
	// 	setTimeout(() => {
	// 		// uni.offKeyboardHeightChange(fn1)
	// 		// uni.offKeyboardHeightChange(fn2)
	// 		uni.offKeyboardHeightChange()
	// 		console.warn('offKeyboardHeightChange success')
	// 	},10000)
	// 	return new Promise(resolve =>
	// 		setTimeout(resolve, 25000) // 等待 100 秒后再结束测试
	// 	);
	// })
	// it('screenshot', async () => {
	// 	// const image = await program.screenshot({fullPage: true})
	// 	const image = await program.screenshot()
	// 	expect(image).toMatchImageSnapshot();
	// })
})