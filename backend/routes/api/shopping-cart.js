const express = require("express");
const router = express.Router();
const { ShoppingCart, CartItem, Product, Purchase } = require("../../db/models");


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

   
    res.json({ cart, cartItems });
  })
);

router.delete("/delete/:userId/:productId", asyncHandler(async(req, res) => {
  const productId = parseInt(req.params.productId);
  const userId = parseInt(req.params.userId);
 
  const shoppingCart = await ShoppingCart.findOne({where: {
    userId,
  }})

  

  // console.log(shoppingCart)

  const itemId = shoppingCart.id;
  

  const itemToDelete = await CartItem.findOne({ where: {
    cartId: itemId
  }})


console.log(itemToDelete)
 

  const deleteItem = await CartItem.destroy({ where: {
    cartId: itemToDelete.cartId,
    productId: itemToDelete.productId
  }})


  const cartItems = await CartItem.findAll({
    where: {
      cartId: shoppingCart.id,
    },
  });

  res.json({ cartItems })
  
}))

router.delete("/checkout/:userId", asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.userId);
 
  const shoppingCart = await ShoppingCart.findOne({where: {
    userId,
  }})

  const itemId = shoppingCart.id;
  
  const itemToDelete = await CartItem.destroy({ where: {
    cartId: itemId
  }})
  
    await ShoppingCart.destroy({where: {
    userId,
  }})

  // const cartItems = await CartItem.findAll({
  //   where: {
  //     cartId: shoppingCart.id,
  //   },
  // });

  res.json({ shoppingCart })

}))

router.post("/add-purchase-history/:userId", asyncHandler(async(req, res) => {
   const { productIds } = req.body;
   const userId = parseInt(req.params.userId);
   
   

   productIds.forEach(async (id) => {
     await Purchase.create({ userId, productId: id })
   })

   console.log("product ids", productIds)

}))

module.exports = router;
