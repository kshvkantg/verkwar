const exp = require('../model/experience');
module.exports = async (req, res) => {
    try {
        const updateUser = await exp.updateOne(req.body);
        res.status(200).json(updateUser)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}