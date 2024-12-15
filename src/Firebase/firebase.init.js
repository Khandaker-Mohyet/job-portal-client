// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYRCneWgAfaa6oEZ4AU3iakvG4xKn08Ao",
  authDomain: "job-portal-19414.firebaseapp.com",
  projectId: "job-portal-19414",
  storageBucket: "job-portal-19414.firebasestorage.app",
  messagingSenderId: "255128634035",
  appId: "1:255128634035:web:91f5da4b4497b2473866c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;