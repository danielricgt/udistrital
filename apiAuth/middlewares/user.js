const userController = require("../controllers/user");
const user = require("../controllers/user");

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
  try {
    let userResult = await userController.createUser(req.objects.user);
    if (userResult.data === undefined) {
      res.status(201).json({ error: userResult.error });
    } else {
      res.json({ message: userResult });
    }
  } catch (error) {
    res.status(400).json({ message: "Error cretate User" });
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
