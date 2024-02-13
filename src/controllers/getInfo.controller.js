const Admins = require('../models/boss.js')

const controller = {}


// controller.stats = async (req, res) => {
//   try {
//     const data = { id } = req.body
//     const user  = await Admins.statsUser(data)
//     res.status(user.code).json(user)
//   } catch (err) {
//     res.status(500).json({ error: "Error al realizar la consulta" })
//   }
// }

controller.getAdmins = async (req, res) => {
  try {
    const user  = await Admins.getAdmins()
    res.status(user.code).json(user)
  } catch (err) {
    res.status(500).json({ error: "Error al realizar la consulta" })
  }
}

module.exports = controller
