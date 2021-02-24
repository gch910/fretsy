const express = require('express');
const router = express.Router();

const { Category } = require('../../db/models');
const { Product } = require('../../db/models');

const asyncHandler = require("express-async-handler");

router.get('/', asyncHandler(async(req, res) => {
    // const parsedId = parseInt(req.params.categoryId);
    // const category = await Category.findByPk(parsedId);

    const products = await Product.findAll();

   console.log(products)
  
    res.json({ products })
}));

module.exports = router;