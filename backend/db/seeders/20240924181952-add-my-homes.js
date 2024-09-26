'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    return Spot.bulkCreate([
      {
        ownerId: 4,
        address: '805 Gilmores Island Road',
        city: 'New Jersey',
        state: 'NJ',
        country: 'United States',
        lat: 39.975210,
        lng: -74.159560,
        name: 'The Temple of the God of Wrath',
        description: 'A good place to study military biomathematics',
        price: 52.00
      },
      {
        ownerId: 4,
        address: '11602 Coastal Hwy #1A',
        city: 'Ocean City',
        state: 'MD',
        country: 'United States',
        lat: 38.42147145,
        lng: -75.05509385,
        name: 'Beachfront House',
        description: 'A good place to vacation',
        price: 500.00
      },
      {
        ownerId: 4,
        address: '889 Edwards Road Apt C-1',
        city: 'Parsippany',
        state: 'NJ',
        country: 'United States',
        lat: 40.85318099,
        lng: -74.35028790,
        name: 'Good Times',
        description: 'A place for bros',
        price: 300.00
      },
      {
        ownerId: 4,
        address: '739 Edwards Rd',
        city: 'Parsippany',
        state: 'NJ',
        country: 'United States',
        lat: 40.85548312,
        lng: -74.35558343,
        name: 'The Villa of Jose',
        description: 'A luxurious place',
        price: 1372.83
         }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: { [Op.in]: ['805 Gilmores Island Road', '11602 Coastal Hwy #1A', '889 Edwards Road Apt C-1', '739 Edwards Rd',] }
    });
  }
};
