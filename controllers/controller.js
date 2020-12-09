const user = require('../middlewares/user');
const dependence = require('../middlewares/dependence');
const inventory =  require('../middlewares/inventory')

exports.getUser = [
    user.validateData,
    user.getUser
]

exports.createUser=[
    user.validateData,
    user.createUser
];

exports.updateUser=[
    user.validateData,
    user.updateUser
];

exports.login = [
    user.validateData,
    user.login
]

exports.createDependence =[
    dependence.validateData,
    dependence.createDependence
]

exports.getDependencies = [
    dependence.getDependencies
]

exports.createInventory = [
    inventory.validateData,
    inventory.createinventory
]