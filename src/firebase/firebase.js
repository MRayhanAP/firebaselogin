import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyDayoehKlBdOdwnGd7aYHTPHg1k8PFEybU",
        authDomain: "fir-login-62fc0.firebaseapp.com",
        databaseURL: "https://fir-login-62fc0-default-rtdb.firebaseio.com",
        projectId: "fir-login-62fc0",
        storageBucket: "fir-login-62fc0.appspot.com",
        messagingSenderId: "361576009560",
        appId: "1:361576009560:web:34de45a639599c193b5f2d"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;