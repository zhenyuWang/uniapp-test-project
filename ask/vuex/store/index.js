import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		"username":"foo",
		"age":18,
		// obj:null
	},
	mutations: {
		testResponsive(state){
			// Vue.set(state,'obj',{
			// 	name:'123',
			// 	age:10
			// })
			state.obj = {
				name:'testResponsive',
				age:18
			}
		}
	}
})
export default store

// import { createStore } from 'vuex'
// const store = createStore({
// 	state: {
// 		count: 1
// 	},
// 	mutations: {
// 		add(state) {
// 			// 变更状态
// 			state.count += 2
// 		},
// 		testResponsive(state){
// 			state.obj = {
// 				name:'testResponsive',
// 				age:18
// 			}
// 		}
// 	}
// })
// export default store