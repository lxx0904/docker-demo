/*
 * @Author: lanxx
 * @Date: 2025-03-15 19:23:39
 * @LastEditTime: 2025-03-15 19:26:46
 * @LastEditors: lanxx
 * @Description: Do not edit
 * @FilePath: \express\app.js
 */
const express = require('express');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// 路由
app.use('/data', dataRoutes);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});