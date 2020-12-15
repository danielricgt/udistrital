const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

router.get("/good", controllers.getGood);
router.post("/good", controllers.createGood);
router.get("/goods",controllers.getGoods);

module.exports = router;
