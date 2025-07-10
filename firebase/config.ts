import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVw1pF3F0R2sCIxACj2ZYhWPGBS4aZPlQ",
  authDomain: "city-pulse-813ee.firebaseapp.com",
  projectId: "city-pulse-813ee",
  storageBucket: "city-pulse-813ee.firebasestorage.app",
  messagingSenderId: "665249523197",
  appId: "1:665249523197:web:ed6387f949d9acabcd6594",
  measurementId: "G-K563PRGD5N"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
