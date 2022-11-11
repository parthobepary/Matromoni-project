// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWlwZwDaS1N--ejqb9NooqvIHTKiikRRQ",
  authDomain: "matrimonial-f3181.firebaseapp.com",
  projectId: "matrimonial-f3181",
  storageBucket: "matrimonial-f3181.appspot.com",
  messagingSenderId: "462837875763",
  appId: "1:462837875763:web:0152cea1c123ab59f58f46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
