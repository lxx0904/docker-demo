/*
 * @Author: lanxx
 * @Date: 2025-03-15 19:24:00
 * @LastEditTime: 2025-03-15 20:06:00
 * @LastEditors: lanxx
 * @Description: Do not edit
 * @FilePath: \express\routes\dataRoutes.js
 */
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', dataController.getData);

// 获取单个数据
router.get('/:id', dataController.getDataById);

module.exports = router;