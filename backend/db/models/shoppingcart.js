'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    userId: DataTypes.INTEGER
  }, {});
  ShoppingCart.associate = function(models) {
    const columnMapping = {
      through: "CartItem",
      otherKey: "productId",
      foreignKey: "cartId"
    }
    
    ShoppingCart.belongsTo(models.User, { foreignKey: "userId" })
    ShoppingCart.belongsToMany(models.Product, columnMapping)

  };
  return ShoppingCart;
};

//column "ShoppingCartId" of relation "CartItems" does not exist