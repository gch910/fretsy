'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  CartItem.associate = function(models) {
    CartItem.belongsTo(models.Product, { foreignKey: "productId" })
  };
  return CartItem;
};