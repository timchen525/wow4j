const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/echarts": {
        target: "http://localhost:10086",
        pathRewrite: {
          "^/echarts": ""
        }
      }
    }
  }
})
