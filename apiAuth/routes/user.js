const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

router.get("/user", controllers.getUser);
router.post("/user", controllers.createUser);
router.put("/user", controllers.updateUser);

module.exports = router;
