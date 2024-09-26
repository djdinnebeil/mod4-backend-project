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
        spotId: 8,
        url: 'https://example.com/spot8-image1.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://example.com/spot8-image2.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://example.com/spot8-image3.jpg',
        preview: true,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: {
        [Op.in]: [
          'https://example.com/spot8-image1.jpg',
          'https://example.com/spot8-image2.jpg',
          'https://example.com/spot8-image3.jpg',
        ]
      }
    }, {});
  }
};
