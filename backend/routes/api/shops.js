const express = require("express");
const router = express.Router();

const db = require("../../db/models");

const asyncHandler = require("express-async-handler");

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const shopId = parseInt(req.params.id);
  
      const shop = await db.Shop.findByPk(shopId);
  
      console.log(shop);
  
      res.json({ shop });
    })
  );

  module.exports = router;