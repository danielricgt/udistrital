const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

router.get("/inventarios", controllers.getUser);
router.post("/inventarios", controllers.createUser);
router.put("/inventarios", controllers.updateUser);

module.exports = router;
