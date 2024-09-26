'use strict';

const { SpotImage } = require('../../db/models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: 'https://example.com/spot1-image1.jpg',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://example.com/spot1-image2.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://example.com/spot2-image1.jpg',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://example.com/spot2-image2.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://example.com/spot3-image1.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://example.com/spot6-image1.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://example.com/spot6-image2.jpg',
        preview: false,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: {
        [Op.in]: [
          'https://example.com/spot1-image1.jpg',
          'https://example.com/spot1-image2.jpg',
          'https://example.com/spot2-image1.jpg',
          'https://example.com/spot2-image2.jpg',
          'https://example.com/spot3-image1.jpg',
          'https://example.com/spot6-image1.jpg',
          'https://example.com/spot6-image2.jpg',
        ]
      }
    }, {});
  }
};
