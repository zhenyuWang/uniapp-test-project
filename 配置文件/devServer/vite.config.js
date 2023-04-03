import {
	defineConfig
} from 'vite'
import uni from "@dcloudio/vite-plugin-uni";
// import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	server: {
		port: 1234,
		open: true,
		proxy: {
			'/api': {
				target: 'http://114.115.235.59',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
			"/dapi": {
				target: "https://testcloud.aurine.cn",
				changeOrgin: true,
				rewrite: (path) => path.replace(/^\/dapi/, '')
			}
		}
	}
})
