const Restaurant = require('../models/Restaurant');

const RestaurantController = {
    show: async(req, res) => {
        try{
            res.json(await Restaurant.findById(req.params.id));
        } catch(err){
            console.log(err)
            res.json(err)
        }
    }
}
module.exports = RestaurantController;
