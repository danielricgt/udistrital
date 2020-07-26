const userController = require('../controllers/user')

async function validateData(req, res, next){
    req.objects = {};
    if(req.method === 'POST'){
        req.objects.user = req.body;
    }
    else if(req.method === 'GET'){
        req.objects.user = req.query
    }
    next();
}

async function getUser(req, res){
    try {
        let userData = await userController.getUser(req.objects.user);
        res.json(userData);
    } catch (error) {
        res.status(400).json({message : "get User"})
    }
}

async function createUser(req, res){
    let userState = await userController.getUser(req.objects.user)
    if(userState === undefined){
    try {
        await userController.createUser(req.objects.user)
        res.json({ message: `User Create` })
    } catch (error) {
        res.status(400).json({message : "Error cretate User"})
    }
}
else{
    res.status(400).json({message : "User Duplicate"})
}  
}

module.exports ={
    validateData,
    createUser,
    getUser
}