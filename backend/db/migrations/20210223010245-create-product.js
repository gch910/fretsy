'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.NUMERIC(8, 2)
      },
      amount: {
        type: Sequelize.INTEGER
      },
      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      img: {
        type: Sequelize.STRING(400)
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: "Categories"}
      },
      shopId: {
        type: Sequelize.INTEGER,
        references: { model: "Shops" }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};