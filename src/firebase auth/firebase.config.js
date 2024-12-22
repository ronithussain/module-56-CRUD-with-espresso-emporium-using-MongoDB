// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJv-4EKHzDg-eLDv4Df2hzsETtli-hrQ",
  authDomain: "coffee-with-current-51ba3.firebaseapp.com",
  projectId: "coffee-with-current-51ba3",
  storageBucket: "coffee-with-current-51ba3.firebasestorage.app",
  messagingSenderId: "416370445261",
  appId: "1:416370445261:web:d3a7000cb8a7a08a4b9284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);