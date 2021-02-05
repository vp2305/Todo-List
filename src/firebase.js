// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpGwE3zql0N9hJBOrQIFhCCk1VPftQzWo",
    authDomain: "todo-list-23.firebaseapp.com",
    projectId: "todo-list-23",
    storageBucket: "todo-list-23.appspot.com",
    messagingSenderId: "445112306926",
    appId: "1:445112306926:web:1c7bb5dddab86e2fe637ff",
    measurementId: "G-QJW26D514Q"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage(); //this will be used to upload the pictures

export { db, auth, storage };