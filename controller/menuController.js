const menuService = require("../services/menuService");

async function getAllmenus(req, res) {
  const menus = await menuService.getAllmenus();
  res.json(menus);
}

module.exports = {
  getAllmenus,
};
