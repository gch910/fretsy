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

    const categoryName = await Category.findByPk(id);
    // console.log(productsByCategory[0]);
    res.json({ productsByCategory, categoryName });
  })
);

router.get(
  "/:productId",
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.productId);

    const product = await Product.findByPk(productId);

    console.log(product);

    res.json({ product });
  })
);



module.exports = router;
