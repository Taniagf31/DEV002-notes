// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //Esto no estaba inactivo...
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtR1u9ljoBiIRoKaHl7p9JRyIBnBC9G58",
  authDomain: "journal-notes-2d9ef.firebaseapp.com",
  projectId: "journal-notes-2d9ef",
  storageBucket: "journal-notes-2d9ef.appspot.com",
  messagingSenderId: "238449478629",
  appId: "1:238449478629:web:35ac0c653c4326acbfbd0c"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export const db = getFirestore();

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyDfib1EmiLC416QHjYJ9OyZydV7Os-VCeg",
//   authDomain: "journal-note-68a3b.firebaseapp.com",
//   projectId: "journal-note-68a3b",
//   storageBucket: "journal-note-68a3b.appspot.com",
//   messagingSenderId: "1026533339383",
//   appId: "1:1026533339383:web:dfe47b8ce28774590823f2"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);