// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEmCwBDwfGX2UWel0k5L3DuXtIfRwLh8A",
  authDomain: "animecrud-profile-picture.firebaseapp.com",
  projectId: "animecrud-profile-picture",
  storageBucket: "animecrud-profile-picture.firebasestorage.app",
  messagingSenderId: "849448779665",
  appId: "1:849448779665:web:b2c57bf17461f590382430",
  measurementId: "G-Y5JQ83TRND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
