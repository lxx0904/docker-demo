/*
 * @Author: lanxx
 * @Date: 2025-03-15 19:58:19
 * @LastEditTime: 2025-03-17 16:05:02
 * @LastEditors: lanxx
 * @Description: Do not edit
 * @FilePath: \docker\nginx\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // 关闭sourcemap
  productionSourceMap: false,
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://120.26.16.213:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
