const exp = require('../model/experience');
module.exports = async (req, res) => {
  try {
    const deleteExperienceResponse = await exp.deleteOne(req.query);
    res.status(200).json(deleteExperienceResponse)
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}