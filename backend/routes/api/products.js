const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const { Category } = require("../../db/models");
const { Product } = require("../../db/models");
const { Shop } = require("../../db/models");


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
  "/random-category",
  asyncHandler(async (req, res) => {
    const randomGenerator = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };
    let id = randomGenerator(1, 7)

    let id2 = randomGenerator(1, 7)
    
    if(id === id2) {
      if(id > 1 && id <= 6) {
        id -= 1 
      } else {
        id += 1
      }
    }

    console.log(id, id2)
    
    const productsByCategory1 = await Product.findAll({
      where: {
        categoryId: id,
      },
      include: Category,
    });

    const productsByCategory2 = await Product.findAll({
      where: {
        categoryId: id2,
      },
      include: Category,
    });


    // console.log(productsByCategory[0]);
    res.json({ productsByCategory1, productsByCategory2 });
  })
);
router.get(
  "/categories/:categoryId",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.categoryId)
    
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
  "/shops/:shopId",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.shopId);
    const productsByShop = await Product.findAll({
      include: Shop,
      where: {
        shopId: id,
      },
    });

    // const shop = productsByShop[0].Shop;
    // const shop = await Shop.findByPk(id);
    
    res.json({ productsByShop });
  })
);

router.get(
  "/:productId",
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.productId);

    const product = await Product.findByPk(productId);

    console.log(product);

    const shopId = product.shopId
  
    const shop = await Shop.findByPk(shopId);

    console.log(shop);


    res.json({ product, shop });
  })
);

router.post("/search", asyncHandler(async(req, res) => {
  const { search } = req.body;
  console.log("===========================", search)
  const matchingProducts = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: "%" + search + "%",
      }
    }
  })

  console.log(matchingProducts)

  return res.json({ products: matchingProducts })
}))



module.exports = router;
