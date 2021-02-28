const express = require("express");
const router = express.Router();

const { Shop } = require("../../db/models");

const asyncHandler = require("express-async-handler");

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const shopId = parseInt(req.params.id);
  
      const shop = await Shop.findByPk(shopId);
  
      console.log(shop);
  
      res.json({ shop });
    })
  );
router.get(
    "/",
    asyncHandler(async (req, res) => {
  
      const shops = await Shop.findAll();
  
      console.log(shops);
  
      res.json({ shops });
    })
  );

  module.exports = router;