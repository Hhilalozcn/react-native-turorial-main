// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <-- Authentication için eklenmeli

const firebaseConfig = {
  apiKey: "AIzaSyBSruCDX-bU1LAyc-5vZXmCQjaXOUCjLi0",
  authDomain: "seyahat-gunlugum.firebaseapp.com",
  databaseURL: "https://seyahat-gunlugum-default-rtdb.firebaseio.com",
  projectId: "seyahat-gunlugum",
  storageBucket: "seyahat-gunlugum.appspot.com",
  messagingSenderId: "86174064518",
  appId: "1:86174064518:web:05c8185646ae9bb5b85607",
  // measurementId: "G-J9LXQT7FG3"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

// Firestore ve Auth servislerini al
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
