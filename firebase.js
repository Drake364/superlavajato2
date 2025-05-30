
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsecNhGJQ_nuEIP3bcpIcVgo8TGygKWvM",
  authDomain: "lavajato1-f8fa4.firebaseapp.com",
  projectId: "lavajato1-f8fa4",
  storageBucket: "lavajato1-f8fa4.firebasestorage.app",
  messagingSenderId: "479444330634",
  appId: "1:479444330634:web:0debaa2d973f999edee573",
  measurementId: "G-JNLL49FBLL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
