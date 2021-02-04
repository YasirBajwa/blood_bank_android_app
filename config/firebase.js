import  * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAQdvOURJWHAc5CkOc_P5g1EV63jG7N15A",
    authDomain: "blood-bank-app-3c7d7.firebaseapp.com",
    projectId: "blood-bank-app-3c7d7",
    storageBucket: "blood-bank-app-3c7d7.appspot.com",
    messagingSenderId: "588072920222",
    appId: "1:588072920222:web:86f8e094ec9a411dffc78f",
    measurementId: "G-WCGYSS8ZR6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;