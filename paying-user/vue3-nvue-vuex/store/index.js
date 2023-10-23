// // 页面路径：store/index.js
// import { createStore } from 'vuex'
// const store = createStore({
// 	state:{//存放状态
// 		"username":"foo",
// 		"age":18
// 	}
// })

// export default store


// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0 };
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});
