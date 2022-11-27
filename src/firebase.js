import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4XHEMWmwo2sa_11QORc3qxeuh98mnOcU",
  authDomain: "chatty-e6310.firebaseapp.com",
  projectId: "chatty-e6310",
  storageBucket: "chatty-e6310.appspot.com",
  messagingSenderId: "858512759552",
  appId: "1:858512759552:web:73abec22d733703ba631e5",
  measurementId: "G-80901SXS6L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();
