import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDIUY_4lqtRD-PIcd5jIhkmLshzjykPhfs",
    authDomain: "fir-sample-afa35.firebaseapp.com",
    projectId: "fir-sample-afa35",
    storageBucket: "fir-sample-afa35.appspot.com",
    messagingSenderId: "515426316613",
    appId: "1:515426316613:web:442d592d2713a2e07e4e2c",
    measurementId: "G-FKMD566YPJ"

};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
    try {
      const snapshot = await db
        .collection("todos")
        .get();
      const items = snapshot.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id })
      );
      return items;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

export const addFirebaseItem = async (item) => {
    try {
        const todoRef = db.collection("todos");
        await todoRef.add(item);
    } catch (err) {
        console.log(err);
    }
}

export const updateFirebaseItem = async (item, id) => {
    try {
        const todoRef = db.collection("todos").doc(id);
        await todoRef.update(item);
    } catch (err) {
        console.log(err);
    }
}

export const clearFirebaseItem = async (item) => {
    const todoRef = db.collection("todos").doc(item.id);
    await todoRef.delete().then(function () {
    }).catch(function (err) {
        console.log(err);
    });
};