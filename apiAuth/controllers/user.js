const admin = require("firebase-admin");
const serviceAccount = require("../config/config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inventarios-1d84e.firebaseio.com",
});

const db = admin.firestore();

async function getUserRole(uid) {
  try {
    let users = db.collection("users").doc(uid);
    let userData = await users.get();
    return userData.data();
  } catch (error) {
    console(error)
  }
}

async function getUser(user) {
  try {
    let userData = await admin.auth().getUserByEmail(user.email);
    return userData.response = userData;
  } catch (error) {
    return userData.error = error;
  }
}

async function createUserDatabase(user) {
  let docRef = db.collection("users").doc(user.uid);
  try {
    let setAda = await docRef.set({
      id: user.id,
      role: "user",
    });
    return setAda;
  } catch (error) {
    return error;
  }
}

async function createUser(user) {
  let data = {}
  try {
    let result = await admin.auth().createUser({
      email: user.email,
      emailVerified: false,
      phoneNumber: user.phoneNumber,
      password: user.password,
      displayName: `${user.name} ${user.lastname}`,
      photoURL: user.photoURL,
      disabled: false,
    });
    result.id = user.id
    await createUserDatabase(result);
    return data
  } catch (error) {
    data.error = error
    return data;
  }
}

async function updateUser(id, user) {
  let docRef = db.collection("users").doc(id);
  return await docRef.update(user);
}

async function authUser(req, res) {}

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
  updateUser,
  authUser,
  getUserRole,
};
