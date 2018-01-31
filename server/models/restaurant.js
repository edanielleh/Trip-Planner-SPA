const db = require('./db');
var Sequelize = require('sequelize');

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  // price: {
  //   type: Sequelize.ENUM('1', '2', '3', '4', '5')
  // }
 }, 
{
  getterMethods: {
    cuisine: function() {
      return this.getDataValue('cuisine').join('');
    }
  }
});

module.exports = Restaurant;
