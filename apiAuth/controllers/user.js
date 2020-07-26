const admin = require("firebase-admin");
const serviceAccount = require("../config/config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inventarios-1d84e.firebaseio.com",
});

const db = admin.firestore();

async function getUser(user) {
  let users = db.collection('users').doc(`${user.dni}`);
  let userData = await users.get()
  return userData.data();
}

async function createUser(user) {
  let docRef = db.collection("users").doc(user.dni);
  let setAda = await docRef.set({
    name: user.name,
    role: user.role
  });
  return setAda;
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
};
