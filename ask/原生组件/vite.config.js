import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
	plugins: [
		uni({
			vueOptions: {
				template: {
					compilerOptions: {
						// 将所有my-开头的标签作为自定义元素处理
						isCustomElement: tag => tag.startsWith('my-')
					}
				}
			}
		})
	]
})
