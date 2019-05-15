const Restaurant = require('../models/Restaurant');

const RestaurantController = {
    index: async(req, res) => {
        res.json(await Restaurant.find({}));
    },
    show: async(req, res) => {
        try{
            res.json(await Restaurant.findById(req.params.id));
        } catch(err){
            console.log(err);
            res.json(err);
        }
    },
    create: async(req, res) => {
        try{
            if(await Restaurant.find({address: req.body.address}) === []){
                res.status(500).json("Already added this restaurant/address");
                return;
            }

            res.json(await Restaurant.create(req.body));
        } catch(err){
            console.log(err);
            res.json(err);
        }
    },
    update: async(req, res) => {
        try{
            res.json(await Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true}));
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    delete: async(req, res) => {
        try{
            res.json(await Restaurant.findByIdAndDelete(req.params.id)); 
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}
module.exports = RestaurantController;
