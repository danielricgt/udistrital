const user =  require('../middlewares/user')

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
