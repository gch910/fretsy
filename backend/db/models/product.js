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
      },
      categoryId: {
        type: DataTypes.INTEGER
      },
      shopId: {
        type: DataTypes.INTEGER
      },
    },
    {}
  );
  Product.associate = function (models) {
    const columnMapping = {
      through: "CartItem",
      otherKey: "userId",
      foreignKey: "productId",
    };

    Product.belongsToMany(models.User, columnMapping)
  };
  return Product;
};