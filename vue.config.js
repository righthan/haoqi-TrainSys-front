const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8020/',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
})
