const menuService = require("../services/menuService");

async function getAllMenus(req, res) {
  const menus = await menuService.getAllmenus();
  res.json(menus);
}
async function createMenu(req, res) {
  const menu = req.body;

  const createdMenu = await MenuService.createMenu(Menu);
  res.status(201).json(createdMenu);
}

module.exports = {
  getAllMenus,
  createMenu,
};
