/*
 * @Author: lanxx
 * @Date: 2025-03-15 19:23:49
 * @LastEditTime: 2025-03-15 19:24:13
 * @LastEditors: lanxx
 * @Description: Do not edit
 * @FilePath: \express\config\db.js
 */
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '120.26.16.213',
  user: 'root',
  password: '123456',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();