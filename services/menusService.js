const prisma = require("../config/prisma");

async function getAllmenus() {
  try {
    const menus = await prisma.menus.findMany();

    return menus;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllmenus,
};
