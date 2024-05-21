const exp = require('../model/experience');
module.exports = async (req, res) => {
    try {
        const findUser = await exp.findOne(req.query);
        res.status(200).json(findUser)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}