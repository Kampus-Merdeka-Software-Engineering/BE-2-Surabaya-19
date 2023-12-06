const menusService = require("../services/menusService");

async function getAllmenus(req, res) {
  const menus = await menusService.getAllmenus();
  res.json(menus);
}

module.exports = {
  getAllmenus,
};
