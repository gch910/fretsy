const router = require("express").Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const categoriesRouter = require('./categories.js')
const productsRouter = require('./products.js')
const shopsRouter = require('./shops.js')
const shoppingCartRouter = require('./shopping-cart.js')
const purchaseHistoryRouter = require('./purchase-history.js');
const reviewRouter = require("./review.js");


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/categories', categoriesRouter);

router.use('/products', productsRouter);

router.use('/shops', shopsRouter);

router.use('/shopping-cart', shoppingCartRouter)

router.use('/purchase-history', purchaseHistoryRouter)

router.use('/review', reviewRouter)


router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
