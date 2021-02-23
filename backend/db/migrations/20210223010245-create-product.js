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
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.NUMERIC(8, 2),
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      img: {
        type: Sequelize.STRING(400),
        allowNull: false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Categories"}
      },
      shopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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