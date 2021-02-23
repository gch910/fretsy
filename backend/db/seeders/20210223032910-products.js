"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Fender Stratocaster",
          description: "This 1965 Stratocaster, in very rare Black finish, is a true find for any collector or Fender enthusiast. It is in all original condition displaying fantastic looking player wear over the majority of the instrument. Pots date to the 16th week of 1965 and pickups date to June 7th, 1965.",
          price: 40000.00,
          year: 1965,
          color: "black",
          amount: 1,
          available: true,
          img: "https://cdn.shopify.com/s/files/1/0255/8659/7968/products/JH-364.jpg?v=1594261163",
          categoryId: 1,
          shopId: 1
        },
        {
          name: "Gibson Custom Les Paul",
          description: "Gibson Custom Shop's 1959 Les Paul Standard Reissue is not just a tribute to the priceless original models -- it's a clone of them. From laser-scanned dimensions to chemically-recreated plastics to color-matched shades of sunburst, every element has been rendered in unbelievable detail. It represents the culmination of decades of work by Custom Shop's expert team -- a tireless quest to bring accuracy and authenticity to the hands of fans. It’s the definition of cool, and it's the best representation of the 1959 Les Paul Standard since the Gibson Custom Shop began making Historic Reissues over twenty-five years ago.",
          price: 6499.00,
          year: 2015,
          color: "sunburst",
          amount: 1,
          available: true,
          img: "https://cdn.shopify.com/s/files/1/0288/8617/1682/products/90485_1_2000x.jpg?v=1597428307",
          categoryId: 1,
          shopId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
