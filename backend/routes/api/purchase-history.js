const express = require("express");
const router = express.Router();
const { User, Product, Purchase } = require("../../db/models");
const asyncHandler = require("express-async-handler");

router.get("/:userId", asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.userId);

    const purchasedProducts = await User.findAll({
        include: Product,
        where: {
            id: userId
        }
        

    })

    console.log("user id", userId)
   
    const productsArray = purchasedProducts[0].Products
    // products.forEach(product => console.log(product.name))

    res.json({ productsArray })
}))

module.exports = router;