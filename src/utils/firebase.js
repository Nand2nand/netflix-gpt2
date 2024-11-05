// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjEcU-PSKfWoFLZvDkYl0Kh8PFhN05da8",
  authDomain: "netflixgpt-87829.firebaseapp.com",
  projectId: "netflixgpt-87829",
  storageBucket: "netflixgpt-87829.firebasestorage.app",
  messagingSenderId: "533247847957",
  appId: "1:533247847957:web:1018a472fb0de3164ea81c",
  measurementId: "G-1KFYJEX1X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();