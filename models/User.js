const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const Users = new Schema({
    name: String,
    pass: String,
    email: String,
    mobile: String
});
module.exports = mongoose.model('Users', Users);
