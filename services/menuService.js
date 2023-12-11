const prisma = require("../config/prisma");

async function getAllMenus() {
  try {
    const menus = await prisma.menu.findMany();

    return menus;
  } catch (error) {
    throw error;
  }
}

async function createMenu(menu) {
  console.log(menu);
  try {
    return await prisma.menu.create({
      data: menu,
    });
  } catch (err) {
    throw err;
  }
}

async function deleteMenu(menuId) {
  try {
    return await prisma.menu.delete({
      where: {
        id: menuId,
      },
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllMenus,
  createMenu,
  deleteMenu,
};
