"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Shops",
      [
        {
          name: "Coolio's Guitaros",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rock On",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jazzerita",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bloomberg's Basses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electrify",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    
        {
          name: "Nostalgia Inc.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stringify",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lick's",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Shops', null, {});
    
  },
};
