const User = require('../models/User');

const UserController = {
    index: async(req, res) => {
        res.json(await User.find());
    },
    show: async(req, res) => {
        try{
            res.json(await User.find({name: req.params.name}));
        } catch(err){
            console.log(err)
            res.json(err)
        }
    },
    create: async(req, res) => {
        try{
            const user = await User.find({name: req.body.name});
            if(user.length > 0){
                res.status(500).json("Username taken!");
                return;
            }
 
            res.json(await User.create(req.body));
        } catch(err){
            console.log(err);
            res.status(500).json("Username taken!");
        }
    },
    update: async(req, res) => {
        try{
            res.json(await User.findOneAndUpdate({name: req.params.name}, req.body, {new: true, useFindAndModify: false}));
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    delete: async(req, res) => {
        try{
            res.json(await User.findOneAndDelete({name: req.params.name}));
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}
module.exports = UserController;
