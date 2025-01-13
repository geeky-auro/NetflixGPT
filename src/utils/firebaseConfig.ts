// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegHioLvcvFFQwaleiS8rFD2Yr_a9dPM0",
  authDomain: "netflixgpt-8c428.firebaseapp.com",
  projectId: "netflixgpt-8c428",
  storageBucket: "netflixgpt-8c428.firebasestorage.app",
  messagingSenderId: "759673514631",
  appId: "1:759673514631:web:5058478a7fdcb863092622",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
