// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWX2KP9hyBuqWbw4myAWMyrh01PiiHqvQ",
  authDomain: "learnart-b1273.firebaseapp.com",
  projectId: "learnart-b1273",
  storageBucket: "learnart-b1273.appspot.com",
  messagingSenderId: "709034031900",
  appId: "1:709034031900:web:9d55f8b97eb81917be58d9",
  measurementId: "G-9W1XSKBSQP",
  storageBucket: 'gs://learnart-b1273.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, createUserWithEmailAndPassword };