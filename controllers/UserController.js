const User = require('../models/User');

const UserController = {
    show: async(req, res) => {
        try{
            res.json(await User.findById(req.params.id));
        } catch(err){
            console.log(err)
            res.json(err)
        }
    }
}
module.exports = UserController;
