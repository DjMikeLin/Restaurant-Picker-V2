// In db/connection.js
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true);

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }); 
} else {//creates database if it doesn't exist
    mongoose.connect('mongodb://localhost/favorite', { useNewUrlParser: true })
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err)
    process.exit(-1)
})

mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MongoDB")
})

module.exports = mongoose
