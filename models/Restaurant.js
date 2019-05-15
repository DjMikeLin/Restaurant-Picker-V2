const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const Restaurants = new Schema({
    name: String,
    address: String,
    number: String,
    users: [Schema.Types.ObjectId]
});
module.exports = mongoose.model('Restaurants', Restaurants);
