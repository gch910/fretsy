const express = require("express");
const router = express.Router();

const { Category } = require("../../db/models");
const { Product } = require("../../db/models");

const asyncHandler = require("express-async-handler");
// const { productsCategory } = require('../../../frontend/src/store/products');

router.get(
  "/",
  asyncHandler(async (req, res) => {
    // const parsedId = parseInt(req.params.categoryId);
    // const category = await Category.findByPk(parsedId);

    const products = await Product.findAll();

    //    console.log(products)

    res.json({ products });
  })
);

router.get(
  "/categories/:categoryId",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.categoryId);
    const productsByCategory = await Product.findAll({
      where: {
        categoryId: id,
      },
    });
    // console.log(productsByCategory[0]);
    res.json({ productsByCategory });
  })
);

module.exports = router;