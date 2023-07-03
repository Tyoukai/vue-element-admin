const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, // 关闭语法校验检测
  // 开启代理服务器
  devServer: {
    proxy: 'http://10.246.4.52:8100'
  }
})
