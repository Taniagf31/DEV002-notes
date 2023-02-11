// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //Esto no estaba inactivo...
import {getAuth} from 'firebase/auth';

import {getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDfib1EmiLC416QHjYJ9OyZydV7Os-VCeg",
  authDomain: "journal-note-68a3b.firebaseapp.com",
  projectId: "journal-note-68a3b",
  storageBucket: "journal-note-68a3b.appspot.com",
  messagingSenderId: "1026533339383",
  appId: "1:1026533339383:web:dfe47b8ce28774590823f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

export const saveNotes = (title, description, id) =>
addDoc(collection(db, "notes"), (title, description, id));