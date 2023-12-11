const menuService = require("../services/menuService");

async function getAllMenus(req, res) {
  const menus = await menuService.getAllMenus();
  res.json(menus);
}
async function createMenu(req, res) {
  const menu = req.body;

  const createdMenu = await menuService.createMenu(menu);
  res.status(201).json(createdMenu);
}
async function deleteMenu(req, res) {
  const menuId = req.params.id; // Assuming the id is in the request parameters

  try {
    const deletedMenu = await menuService.deleteMenu(menuId);
    res.status(200).json(deletedMenu);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllMenus,
  createMenu,
  deleteMenu,
};
