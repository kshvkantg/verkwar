const User = require('../model/user');

module.exports = async (req, res) => {     
    try {
        console.log(req.query);
        const users = await User.findOne(req.query);                
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
