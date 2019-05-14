const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const Restaurant = new Schema({
    name: String,
    address: String,
    number: String
});

module.exports = mongoose.model('Restaurant', Restaurant);
