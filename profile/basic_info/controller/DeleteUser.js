const User = require('../model/user');

module.exports = async (req, res) => {     
    try {
        const users = await User.deleteOne(req.query);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};