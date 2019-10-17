//const Restaurant = require('../models/Restaurant');
const yelp = require('./yelp.js');

const RestaurantController = {
    randomRestaurant: async(req, res) => {
        res.json(await yelp.getRandomRestaurant(req.params.location));
    }
}
module.exports = RestaurantController;
