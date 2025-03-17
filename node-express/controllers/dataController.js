/*
 * @Author: lanxx
 * @Date: 2025-03-15 19:23:54
 * @LastEditTime: 2025-03-15 20:06:34
 * @LastEditors: lanxx
 * @Description: Do not edit
 * @FilePath: \express\controllers\dataController.js
 */
const db = require('../config/db');

// 获取数据
exports.getData = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM your_table');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 获取单个数据
exports.getDataById = async (req, res) => {
  const { id } = req.params;
  try { 
    const [rows] = await db.query('SELECT * FROM your_table WHERE id = ?', [id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
