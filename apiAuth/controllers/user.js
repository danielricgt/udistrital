const admin = require("firebase-admin");
const serviceAccount = require("../config/config.json");
const { use } = require("../routes/user");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inventarios-1d84e.firebaseio.com",
});

const db = admin.firestore();

async function getUser(user) {
  let users = db.collection('users').doc(`${user.id}`);
  let userData = await users.get()
  return userData.data();
}

async function createUser(user) {
  let docRef = db.collection("users").doc(user.id);
  let setAda = await docRef.set({
    name: user.name,
    lastname: user.lastname,
    password: user.password,
    email: user.email,
    role: 'newUser'
  });
  return setAda;
}

async function updateUser(id,user){
  let docRef = db.collection('users').doc(id);
  return await docRef.update(user)
}

async function auth(req, res) {
  const user = {
    id: "3321321",
    name: "John",
    user: "correo@example.com",
    password: "jewrlkjtkljerlkrtejlkertjlk",
  };
  res.json(user);
}

async function deAuthenticate(req, res) {
  const user = {
    id: "3321321",
    name: "John",
    user: "correo@example.com",
    password: "jewrlkjtkljerlkrtejlkertjlk",
  };
  res.json(user);
}

module.exports = {
  getUser,
  createUser,
  deAuthenticate,
  updateUser
};
