const express = require("express");
const router = express.Router();
var controllers = require("../controllers/controller");

router.get("/dependencies", controllers.getDependencies);
router.post("/dependence", controllers.createDependence);
router.get("/dependece",controllers.getDependence);

module.exports = router;
