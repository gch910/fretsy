"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Electric Guitars",
          img: "https://media.guitarcenter.com/is/image/MMGS7//Vintera-50s-Stratocaster-Electric-Guitar-Sonic-Blue/L58817000002000-00-1600x1600.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Acoustic Guitars",
          img: "https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jazz Guitars",
          img: "https://i.pinimg.com/originals/8f/02/74/8f02747fb628f47e19dc8ea049f77819.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Handmade Guitars",
          img: "https://lichtyguitars.com/wp-content/uploads/2016/01/flat-custom-guitar-1024x509.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bass Guitars",
          img: "https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_basses_eu_sp.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pedals",
          img: "https://www.uberchord.com/wp-content/uploads/2015/05/Guitar-Pedal-Display-Stombox-vs-Multi-Effect-Units1-scaled.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    
        {
          name: "Amplifiers",
          img: "https://www.musik-produktiv.com/pic-010057677xxl/fender-super-champ-x2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Microphones",
          img: "https://internationalmusician.org/wp-content/uploads/2018/04/Neumann-U-67-Tube-Microphone.jpg",
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
