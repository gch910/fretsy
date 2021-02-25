"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.NUMERIC(8, 2),
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
      },
      color: {
        type: DataTypes.STRING,
      },
      model: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.INTEGER,
        validate: {
          max: 50,
        },
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      shopId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {}
  );
  Product.associate = function (models) {
    const columnMapping = {
      through: "CartItem",
      otherKey: "cartId",
      foreighKey: "productId"
    }

    // Product.belongsToMany(models.User, columnMapping)
    Product.belongsTo(models.Category, { foreignKey: "categoryId"})
    Product.belongsTo(models.Shop, { foreignKey: "shopId"})
    Product.hasMany(models.Review, { foreignKey: "productId"})
    Product.belongsToMany(models.ShoppingCart, columnMapping)
  };
  return Product;
};