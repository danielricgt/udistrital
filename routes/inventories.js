const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

router.get("/inventory", controllers.getUser);
router.post("/inventory", controllers.createInventory);
router.put("/inventory", controllers.updateUser);

module.exports = router;
