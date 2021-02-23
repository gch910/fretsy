"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Electric Guitars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Acoustic Guitars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jazz Guitars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Handmade Guitars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bass Guitars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pedals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    
        {
          name: "Amplifiers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Microphones",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Accessories",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
    
  },
};
