// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRhh9qtLmzEv9tZ2WQkaQu2F8JUAvxBRk",
  authDomain: "calendargpt-7c7ac.firebaseapp.com",
  projectId: "calendargpt-7c7ac",
  storageBucket: "calendargpt-7c7ac.appspot.com",
  messagingSenderId: "734957511569",
  appId: "1:734957511569:web:ed903b2cb8ba3cb8bf3030",
  measurementId: "G-2022E3R2Z1"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }