const user =  require('../middlewares/user')
//exports.getAuth =[]

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

/*
exports.listUsers= [
    
]*/