const express = require("express");
const router = express.Router();

const menuControllers = require("../controllers/menuControllers");

router.get("/menus", menuControllers.getAllmenus);

module.exports = router;
