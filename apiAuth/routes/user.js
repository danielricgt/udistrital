const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

//router.get("/auth", controllers.getAuth);
router.get("/user", controllers.getUser);
router.post("/user", controllers.createUser);
//router.get("/users", controllers.listUsers);

module.exports = router;
