import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyA5jKLcrrxylHMrCfhHXgjBhdKEcgEakCk",
    authDomain: "gallery-app-3a71d.firebaseapp.com",
    projectId: "gallery-app-3a71d",
    storageBucket: "gallery-app-3a71d.appspot.com",
    messagingSenderId: "502423857964",
    appId: "1:502423857964:web:95e4f71a3471c0c1181a89"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, fs, storage, timestamp }
