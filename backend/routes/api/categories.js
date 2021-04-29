const express = require('express');
const router = express.Router();

const { Category } = require('../../db/models');
const { Product } = require('../../db/models');

const asyncHandler = require("express-async-handler");

router.get('/', asyncHandler(async(req, res) => {
    // const parsedId = parseInt(req.params.categoryId);
    // const category = await Category.findByPk(parsedId);

    const categories = await Category.findAll();

   console.log(categories)
  
    res.json({ categories })
}));

router.get('/random-categories', asyncHandler(async(req, res) => {
    // const parsedId = parseInt(req.params.categoryId);
    // const category = await Category.findByPk(parsedId);

   const categories = await Category.findAll();

   let random = Math.floor(Math.random() * 2);

  if (categories.length > 4) {
    if (random >= categories.length - 4) {
      random -= 4;
    }
    
    }
    const categoryValues1 = categories.slice(random, random + 5);
    const categoryValues2 = categories.slice(random, random + 4);
  

   console.log(categories)
  
    res.json({ categoryValues1, categoryValues2 })
}));

module.exports = router;