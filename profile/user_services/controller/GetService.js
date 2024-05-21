const service = require('../model/UserService');
module.exports = async (req, res) => {
    try {
        const getService = await service.find(req.query);
        res.status(200).json(getService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}