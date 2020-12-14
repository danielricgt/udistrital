const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

//router.get("/inventory", controllers);
router.post("/inventory", controllers.createInventory);
router.put("/inventory", controllers.updateUser);

module.exports = router;
