const { json } = require("body-parser");
const goodController = require("../controllers/firebase");

async function validateData(req, res, next) {
  req.objects = {};
  if (req.method === "POST") {
    req.objects.good = req.body;
  } else if (req.method === "GET") {
    req.objects.good = req.query;
  } else if (req.method === "PUT") {
    req.objects.id == req.query.id;
    req.objects.good = req.body;
  }
  next();
}

async function createGood(req,res){
  let result =  await goodController.createGood(req.objects.good);
  res.json(result);
}

async function getGoods(req,res){
  let result  = await goodController.getGoods(req.objects.good);
  res.json(result);
}

async function getGood(req,res){
}



module.exports = {
  validateData,
  createGood,
  getGoods,
  getGood

};
