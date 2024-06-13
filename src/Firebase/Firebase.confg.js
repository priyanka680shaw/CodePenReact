// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBM3zzSpcpbj9EA6vqLuI4399HkfmzZKic",
  authDomain: "codepen-6b066.firebaseapp.com",
  projectId: "codepen-6b066",
  storageBucket: "codepen-6b066.appspot.com",
  messagingSenderId: "282715488629",
  appId: "1:282715488629:web:d407b53c6c95a8d6dad33c",
  measurementId: "G-EWVRJJZJCY"
};

// Initialize Firebase
export const initializeAppFireBase = initializeApp(firebaseConfig);
export const auth = getAuth(initializeAppFireBase);
export const db = getFirestore(initializeAppFireBase);
