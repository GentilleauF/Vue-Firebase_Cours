// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFWw_cDVvcnqnuqHk2llQVQWmKpeo1RO0",
  authDomain: "tuto-vue-firebase.firebaseapp.com",
  databaseURL: "https://tuto-vue-firebase-default-rtdb.firebaseio.com",
  projectId: "tuto-vue-firebase",
  storageBucket: "tuto-vue-firebase.appspot.com",
  messagingSenderId: "723234347098",
  appId: "1:723234347098:web:bad92d2bf087701e076063"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();