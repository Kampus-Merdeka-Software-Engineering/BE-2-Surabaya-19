const express = require("express");
const router = express.Router();

const menuControllers = require("../controllers/menuControllers");

router.get("/menus", menuControllers.getAllMenus);
router.post("/menus", menuControllers.createMenu);
router.delete("/menus", menuControllers.deleteMenu);

module.exports = router;
