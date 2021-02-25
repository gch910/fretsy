const router = require("express").Router();
const asyncHandler = require("express-async-handler");

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const categoriesRouter = require('./categories.js')
const productsRouter = require('./products.js')
const shopsRouter = require('./shops.js')

const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/categories', categoriesRouter);

router.use('/products', productsRouter);

router.use('/shops', shopsRouter);

//test
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });

//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

//test

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });

module.exports = router;
