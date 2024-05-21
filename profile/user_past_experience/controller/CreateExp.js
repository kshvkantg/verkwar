const Exp = require('../model/experience');

module.exports = async (req, res) => {
  try {
    const exp = new Exp(req.body);
    await exp.save();
    res.status(201).json(exp);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}