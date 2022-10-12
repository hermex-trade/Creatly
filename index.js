// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7MT6L-BRf8LfLwqFQFPZaSHDRZiJhrgY",
  authDomain: "artikel-3c2d6.firebaseapp.com",
  projectId: "artikel-3c2d6",
  storageBucket: "artikel-3c2d6.appspot.com",
  messagingSenderId: "806761724627",
  appId: "1:806761724627:web:f65a49323f90bcfbbb7226",
  measurementId: "G-0B3TP6EWJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);