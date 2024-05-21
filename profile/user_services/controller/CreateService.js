const Service = require('../model/UserService');
module.exports = async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};