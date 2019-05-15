const User = require('../models/User');

const UserController = {
    index: async(req, res) => {
        res.json(await User.find({}));
    },
    show: async(req, res) => {
        try{
            res.json(await User.findById(req.params.id));
        } catch(err){
            console.log(err)
            res.json(err)
        }
    },
    create: async(req, res) => {
        try{
            if(await User.find({name: req.body.name}) === []){
                res.status(500).json("Username taken!");
                return;
            }
 
            res.json(await User.create(req.body));
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    update: async(req, res) => {
        try{
            res.json(await User.findByIdAndUpdate(req.params.id, req.body, {new: true}));
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    delete: async(req, res) => {
        try{
            res.json(await User.findByIdAndDelete(req.params.id));
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}
module.exports = UserController;
