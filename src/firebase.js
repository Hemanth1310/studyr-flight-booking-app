// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth";           // Authentication
// You can also import other products like Storage, Realtime DB if needed


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu77BkGWU1rRzZe2spuBZAgmptyB0aeGk",
  authDomain: "studyr-flight-booking-app.firebaseapp.com",
  databaseURL: "https://studyr-flight-booking-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studyr-flight-booking-app",
  storageBucket: "studyr-flight-booking-app.appspot.com",
  messagingSenderId: "723169366106",
  appId: "1:723169366106:web:78ce43b2ba0be973bc0863",
  measurementId: "G-TMCB9EJ28K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

export { app, analytics, db, auth };
