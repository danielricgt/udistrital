const dependenceController = require("../controllers/firebase");

async function validateData(req, res, next) {
    req.objects = {};
    if (req.method === "POST") {
      req.objects.dependence = req.body;
    } else if (req.method === "GET") {
      req.objects.user = req.query;
    } else if (req.method === "PUT") {
      req.objects.id == req.query.id;
      req.objects.user = req.body;
    }
    next();
  }

async function createDependence(req, res) {
    let userInfo = await dependenceController.getUser(req.objects.dependence);
    let result = await dependenceController.createDependence(req.objects.dependence)
    res.json(result);
}

async function getDependencies(req, res) {
    let result = await dependenceController.getDependencies();
    res.json(result);
}

module.exports = {
    validateData,
    createDependence,
    getDependencies
};