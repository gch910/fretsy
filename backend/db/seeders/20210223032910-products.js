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
          model: "WGL84809",
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
        {
          name: "Martin Acoustic OMC-28E",
          description: "The Martin Standard Series OMC-28E Orchestra Model Acoustic-Electric Guitar blends model-specific sound images using a Martin Gold Plus under-the-saddle transducer to achieve optimum acoustic reproduction. The OM-28 was the first guitar Martin offered with a 14-fret neck. Produced from 1929-1933, the OM-28 is widely considered the original modern flat top steel-string guitar. Differing only in body size from the Martin DC-28E, this Standard Series OMC-28E Orchestra Model is equipped with a cutaway and factory installed Aura VT Enhance electronics. Includes hardshell case.",
          price: 2499.99,
          year: 2018,
          color: "wood",
          model: "OMC-28E",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg",
          categoryId: 2,
          shopId: 7,
        },
        {
          name: "D'Angelico NYL-5 2003 Honey",
          description: "This 2003 D'Angelico NYL-5 is a stellar instrument.  It is flawless from tip to tale. Played in home environment only.  Always treated with TLC.  It plays, feels, and sounds so jazzy sweet.  German spruce top, maple backs and sides, Kent Armstrong Floating Mini Humbucker, 10 radius neck, 17 lower bout",
          price: 2500.00,
          year: 2003,
          color: "honey",
          model: "NYL-5",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--9-1yed6E--/f_auto,t_supersize/v1613703718/keful7cupjajw9vmkfpg.jpg",
          categoryId: 3,
          shopId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Products', null, {});
  
  },
};
