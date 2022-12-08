import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6zLjUFCbeEXdKxfHNAM24RIQNQZ2utxM",
    authDomain: "eshoe-226f2.firebaseapp.com",
    projectId: "eshoe-226f2",
    storageBucket: "eshoe-226f2.appspot.com",
    messagingSenderId: "799208288844",
    appId: "1:799208288844:web:919f6fededacbd82f7bae9",
    measurementId: "G-8X8SFCGVXN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export default { db, auth };
