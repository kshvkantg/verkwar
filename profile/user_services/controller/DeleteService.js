const service = require('../model/UserService');
module.exports = async (req, res) => {
    try {
        const deleteService = await service.deleteOne(req.query);
        res.status(200).json(deleteService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}