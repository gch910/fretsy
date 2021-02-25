const express = require("express");
const router = express.Router();
const { ShoppingCart, CartItem, Product } = require("../../db/models");

const asyncHandler = require("express-async-handler");


router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId);


    const userCart = await ShoppingCart.findOne({
      where: {
        userId,
      },
    });


    const cartItems = await CartItem.findAll({
      include: Product,
      where: {
        cartId: userCart.id,
      },
    });

    console.log(cartItems);
    res.json({ cartItems });
  })
);

router.post(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId);
    const { productId } = req.body;
    let cart;

    const findCart = await ShoppingCart.findOne({
      where: {
        userId,
      },
    });

    if (!findCart) {
      cart = await ShoppingCart.create({ userId });
    } else {
      cart = findCart;
    }
    // const cartId = cart.id;
    // console.log("cartId", cartId)

    const newCartItem = await CartItem.create({ cartId: cart.id, productId });

    const cartItems = await CartItem.findAll({
      where: {
        cartId: cart.id,
      },
    });

    console.log(cartItems);
    res.json({ cart, cartItems });
  })
);

module.exports = router;
