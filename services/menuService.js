const prisma = require("../config/prisma");

async function getAllmenus() {
  try {
    const menus = await prisma.menu.findMany();

    return menus;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllmenus,
};
