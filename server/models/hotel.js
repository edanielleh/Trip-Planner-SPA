const db = require('./db');
var Sequelize = require('sequelize');

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.STRING
    // (Sequelize.STRING)
  }
// }, {
//   getterMethods: {
//     amenities: function() {
//       return this.getDataValue('amenities').join('')
//     }
//   }
});

module.exports = Hotel;
