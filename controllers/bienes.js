const admin = require("firebase-admin");
const serviceAccount = require("../config/config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inventarios-1d84e.firebaseio.com",
});

const db = admin.firestore();
let table =  db.collection("bienes");


async function createBien(user) {
    let docRef = table.doc(user.uid);
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