'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  Purchase.associate = function(models) {
    // associations can be defined here
  };
  return Purchase;
};