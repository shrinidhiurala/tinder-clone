import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4TCWukW4c3zbq5MPSIjadFN5_aPl9dRU",
    authDomain: "tinder-clone-b6b44.firebaseapp.com",
    projectId: "tinder-clone-b6b44",
    storageBucket: "tinder-clone-b6b44.appspot.com",
    messagingSenderId: "542453162198",
    appId: "1:542453162198:web:226c7999ad67e1b7df2977",
    measurementId: "G-KJ1D6HCQVN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;