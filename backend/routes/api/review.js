const express = require("express");
const router = express.Router();
const { Review, User } = require("../../db/models");

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

router.get("/:productId", asyncHandler(async(req, res) => {
    const productId = parseInt(req.params.productId);

    const productReviews = await Review.findAll({
        include: User,
        where: {
            productId,
        }
    })

    console.log(productId)

    res.json({ productReviews })
}))


module.exports = router;