import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
process.env.UNI_HBUILDERX_PLUGINS = '/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins'
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
