const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
  title: {
    type: String
  },
  type: {
    type: String
  },
  Age_rating: {
    type: Number
  },
  description: {
    type: String
  },
  year: {
    type: Number
  }
},{
    collection: 'game'
});

module.exports = mongoose.model('Game', Game);