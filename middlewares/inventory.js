const inventoryController = require("../controllers/firebase");

async function validateData(req, res, next) {
  req.objects = {};
  if (req.method === "POST") {
    req.objects.inventory = req.body;
  } else if (req.method === "GET") {
    req.objects.user = req.query;
  } else if (req.method === "PUT") {
    req.objects.id == req.query.id;
    req.objects.user = req.body;
  }
  next();
}

async function createinventory(req,res){
    let dependence =  await inventoryController.getDependence(req.objects.inventory.idInventary);
    let result =  await inventoryController.createInventory(dependence);
    res.json(result);
}


module.exports = {
  validateData,
  createinventory,
};
