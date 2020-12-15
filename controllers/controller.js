const user = require("../middlewares/user");
const dependence = require("../middlewares/dependence");
const good = require("../middlewares/good");

exports.getUser = [user.validateData, user.getUser];
exports.createUser = [user.validateData, user.createUser];
exports.updateUser = [user.validateData, user.updateUser];
exports.login = [user.validateData, user.login];
exports.createDependence = [
  dependence.validateData,
  dependence.createDependence,
];
exports.getDependencies = [dependence.getDependencies];
exports.getDependence = [dependence.validateData, dependence.getDependence];
exports.createGood = [good.validateData, good.createGood];
exports.getGoods = [good.validateData, good.getGoods];
exports.getGood = [good.validateData, good.getGood];
