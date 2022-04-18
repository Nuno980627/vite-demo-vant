import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacyPlugin from '@vitejs/plugin-legacy'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    }),
    vueJsx(),
    legacyPlugin({
      targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  base: './', //打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') //设置别名
    }
  },
  server: {
    port: 4000, //启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': '' //代理网址
    },
    cors: true
  }
})
