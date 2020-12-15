const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

//router.get("/good", controllers.getGood);
router.post("/good", controllers.createGood);
router.get("/goods",controllers.getGoods);
//router.put("/good",controllers)
module.exports = router;
