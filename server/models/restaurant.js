const db = require('./db');
var Sequelize = require('sequelize');

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
    // (Sequelize.STRING)
  },
   price: {
    type: Sequelize.INTEGER
  }
//  }, 
// {
//   getterMethods: {
//     cuisine: function() {
//       return this.getDataValue('cuisine').join(', ');
//     }
//   }
});

module.exports = Restaurant;
