const express = require("express");
const router = express.Router();

const menusController = require("../controller/menusController");

router.get("/menus", menusController.getAllmenus);

module.exports = router;
