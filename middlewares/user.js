const userController = require("../controllers/firebase");
const queries =  require("../tools/queries")
const graphUD =   require("../tools/grahpql");

async function validateData(req, res, next) {
  req.objects = {};
  if (req.method === "POST") {
    req.objects.user = req.body;
  } else if (req.method === "GET") {
    req.objects.user = req.query;
  } else if (req.method === "PUT") {
    req.objects.id == req.query.id;
    req.objects.user = req.body;
  }
  next();
}

async function getUser(req, res) {
  try {
    let userData = await userController.getUser(req.objects.user);
    if (userData.response !== undefined) {
      let user = await userController.getUserRole(userData.response.uid);
      let userInfo = {
        id: user.id,
        uid: userData.response.uid,
        role: user.role,
        name: userData.response.displayName,
        phoneNumber: userData.response.phoneNumber,
        email: userData.response.email,
        emailVerified: userData.response.emailVerified,
        fk_dependence: user.fk_dependence,
        status: userData.response.disabled,
      };
      res.json({ userInfo });
    } else {
      res.json({ error: userData.error });
    }
  } catch (error) {
    res.status(400).json({ Error: "Error Get User" });
  }
}

async function createUser(req, res) {
  let error = {};
  let data = {};
  let user = req.objects.user
  let query = queries.createUserMutation(user.identificacion,user.nombres,user.apellidos,user.correo,"04/08/2020",2,2);
  let resultDB = await graphUD.executeQuery(query);
  let userResultFirebase = await userController.createUser(req.objects.user);
  if(resultDB.data.errors ||userResultFirebase.error ){
    if (resultDB.data.errors) {
      error.graphQl =  resultDB.data.errors[0].message;
    }
    if(userResultFirebase.error){
      error.firebase = userResultFirebase.error.message; 
    }
    res.status(400).json({error});
  }
  else {
    data.firebase = userResultFirebase;
    data.graphQl= resultDB.data.data.insert_usuario.returning[0];
    res.json({ data })
  }
}

async function updateUser(req, res) {
  try {
    let update = await userController.updateUser(
      req.query.id,
      req.objects.user
    );
    res.json(update);
  } catch (error) {
    res.status(400).json({ message: "Error update User" });
  }
}

async function login(req, res) {
  try {
    let auth = await userController.authUser(req.objects.user);
    res.json(auth);
  } catch (error) {
    res.status(400).json({ message: "Error Auth" });
  }
}

module.exports = {
  validateData,
  createUser,
  getUser,
  updateUser,
  login,
};
