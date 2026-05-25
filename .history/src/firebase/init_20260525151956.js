// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6oPZj-8j79h_NBIpCdoqRaTXxQBiPGb4",
  authDomain: "vi-authentication.firebaseapp.com",
  projectId: "vi-authentication",
  storageBucket: "vi-authentication.firebasestorage.app",
  messagingSenderId: "596511096055",
  appId: "1:596511096055:web:f422cb7c8badd26e6327f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()