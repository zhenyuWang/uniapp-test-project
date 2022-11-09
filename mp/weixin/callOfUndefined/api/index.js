export const getList = () => {
	uni.request({
		url:"https://www.baidu.com",
		success(res){
			console.log('getList success',res)
		},
		fail(res){
			console.log('getList fail',res)
		},
		complete(res){
			console.log('getList complete',res)
		}
	})
}