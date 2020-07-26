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
        let user = await userController.getUser(req.objects.user);
        res.json(user);
    } catch (error) {
        res.status(400).json({message : "get User"})
    }
}

async function createUser(req, res){
    try {
        await userController.createUser(req.objects.user)
        res.json({ message: `User Create` })
    } catch (error) {
        res.status(400).json({message : "Error cretate User"})
    }
  
}

module.exports ={
    validateData,
    createUser,
    getUser
}