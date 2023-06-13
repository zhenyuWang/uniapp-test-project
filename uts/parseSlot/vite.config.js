import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // minify:false,
    rollupOptions: {
      output: {
        sourcemapExcludeSources: false,
      },
    },
    sourcemap: false,
  },
  plugins: [
    uni({
      vueOptions: {
        reactivityTransform: true,
      },
    }),
    {
      name: 'test',
      configResolved(config) {
        // console.log(config.plugins)
      }
    }
  ],
});
