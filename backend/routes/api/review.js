const express = require("express");
const router = express.Router();
const { Review } = require("../../db/models");

const asyncHandler = require("express-async-handler");


router.post("/:userId/:productId", asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.userId);
    const productId = parseInt(req.params.productId);
    const { review, rating } = req.body; 

    await Review.create({
        userId,
        productId,
        body: review,
        rating
    })

    console.log(review, rating)
}))


module.exports = router;