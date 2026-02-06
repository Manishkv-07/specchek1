// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdRY6dQR9GEmM4D4o0e9nzj8aDPuEgzDs",
  authDomain: "skill-lab-6.firebaseapp.com",
  projectId: "skill-lab-6",
  storageBucket: "skill-lab-6.firebasestorage.app",
  messagingSenderId: "351909257059",
  appId: "1:351909257059:web:2043ae737385a162333d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);