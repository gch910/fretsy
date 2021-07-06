const express = require("express");
const router = express.Router();

const { Category } = require("../../db/models");

const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const categories = await Category.findAll();

    res.json({ categories });
  })
);

//display random categories on banner1 - categoryValues1 for logged in, categoryValues2 for logged out
router.get(
  "/random-categories",
  asyncHandler(async (req, res) => {

    const categories = await Category.findAll();

    let random = Math.floor(Math.random() * 2);

    const categoryValues1 = categories.slice(random, random + 5);
    const categoryValues2 = categories.slice(random, random + 4);

    console.log("categories lenight", categories.length)
    console.log("ranodm", random)
    console.log(categoryValues1)

    res.json({ categoryValues1, categoryValues2 });
  })
);

module.exports = router;
