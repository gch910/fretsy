const express = require('express');
const router = express.Router();

const { Category } = require('../../db/models');
const { Product } = require('../../db/models');

const asyncHandler = require("express-async-handler");

router.get('/', asyncHandler(async(req, res) => {
    // const parsedId = parseInt(req.params.categoryId);
    // const category = await Category.findByPk(parsedId);

    const categories = await Category.findAll();

   
  
    res.json({ categories })
}));

module.exports = router;