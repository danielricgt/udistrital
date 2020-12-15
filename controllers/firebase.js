const admin = require("firebase-admin");
const serviceAccount = require("../config/config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inventarios-1d84e.firebaseio.com",
});

const db = admin.firestore();

async function getUserRole(uid) {
  try {
    let table = db.collection("users");
    let users = await table.doc(uid);
    let userData = await users.get();
    return userData.data();
  } catch (error) {
    console(error);
  }
}

async function getUser(user) {
  try {
    let userData = await admin.auth().getUserByEmail(user.email);
    return (userData.response = userData);
  } catch (error) {
    return (userData.error = error);
  }
}

async function createUserDatabase(user) {
  let table = db.collection("users");
  let docRef = await table.doc(user.uid);
  try {
    let setAda = await docRef.set({
      id: user.id,
      fk_dependence: user.fk_dependence,
      role: "user",
    });
    return setAda;
  } catch (error) {
    return error;
  }
}

async function createUser(user) {
  let data = {};
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
    result.fk_dependence = user.fk_dependence;
    result.id = user.id;

    await createUserDatabase(result);
    data.data = result;
    return data;
  } catch (error) {
    data.error = error;
    return data;
  }
}

async function updateUser(id, user) {
  let table = db.collection("users");
  let docRef = await table.doc(id);
  return await docRef.update(user);
}

async function createDependence(dependence) {
  let table = db.collection("dependencies");
  let docRef = await table.doc();
  try {
    let setAda = await docRef.set({
      dependence_name: dependence.name,
    });
    return setAda;
  } catch (error) {
    return error;
  }
}

async function getDependencies() {
  let table = db.collection("dependencies");
  let dependencies = [];
  let query = await (await table.get()).docs;
  for (let index = 0; index < query.length; index++) {
    const element = query[index];
    dependencies.push({
      id: element._ref._path.segments[1],
      dependence_name: element._fieldsProto.dependence_name.stringValue,
    });
  }
  return dependencies;
}

async function getDependence(id) {
  const table = db.collection("dependencies");
  const snapshot = await table.get();
  let data;
  snapshot.forEach((doc) => {
    if (id === doc.id) {
      data = doc.data();
    }
  });
  return data;
}

async function createGood(good) {
  let dependence = await getDependence(good.fk_dependence);
  good.state = "create";
  if (dependence) {
    let table = db.collection("goods");
    let docRef = await table.doc();
    try {
      let setAda = await docRef.set(good);
      return setAda;
    } catch (error) {
      return error;
    }
  }
}

async function getGood() {}

async function getGoods(dependence) {
  let table = db.collection("goods");
    let goods = [];
    let query = await (await table.get()).docs;
    for (let index = 0; index < query.length; index++) {
      const element = query[index];
  if (dependence.id) {
    if(dependence.id === element._fieldsProto.fk_dependence.stringValue){
      goods.push({
        id: element._ref._path.segments[1],
        physical_space: element._fieldsProto.physical_space.stringValue,
        idPlate: element._fieldsProto.idPlate.stringValue,
        fk_dependence: element._fieldsProto.fk_dependence.stringValue,
        state: element._fieldsProto.state.stringValue,
        brand_and_serie: element._fieldsProto.brand_and_serie.stringValue,
        reason: element._fieldsProto.reason.stringValue,
        place: element._fieldsProto.place.stringValue,
        description: element._fieldsProto.description.stringValue,
      });
    }
  } else {
      goods.push({
        id: element._ref._path.segments[1],
        physical_space: element._fieldsProto.physical_space.stringValue,
        idPlate: element._fieldsProto.idPlate.stringValue,
        fk_dependence: element._fieldsProto.fk_dependence.stringValue,
        state: element._fieldsProto.state.stringValue,
        brand_and_serie: element._fieldsProto.brand_and_serie.stringValue,
        reason: element._fieldsProto.reason.stringValue,
        place: element._fieldsProto.place.stringValue,
        description: element._fieldsProto.description.stringValue,
      });
    }
  }
  return goods;
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  getUserRole,
  createDependence,
  getDependencies,
  getDependence,
  createGood,
  getGoods,
};
