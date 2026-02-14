// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxw2cVwmzRudsRpyCBdcMmufNIiuW7af4",
  authDomain: "hersafe-2566e.firebaseapp.com",
  projectId: "hersafe-2566e",
  storageBucket: "hersafe-2566e.firebasestorage.app",
  messagingSenderId: "85740955532",
  appId: "1:85740955532:web:aeb283cd437ca96758d8a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);