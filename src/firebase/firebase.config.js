// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV94LY3PHFoceZ1CsRTBNS-_FqNag7fRs",
  authDomain: "mern-game-inventory.firebaseapp.com",
  projectId: "mern-game-inventory",
  storageBucket: "mern-game-inventory.appspot.com",
  messagingSenderId: "652262517931",
  appId: "1:652262517931:web:1276450d0530ebee5f9bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;