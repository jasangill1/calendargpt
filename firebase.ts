// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};