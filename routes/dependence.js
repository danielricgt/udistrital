const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

router.get("/dependence", controllers.getDependencies);
router.post("/dependence", controllers.createDependence);
router.put("/dependence", controllers.updateUser);

module.exports = router;
