// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF15Eo3XjqCMQ6O3SH8kwitte9k3cc9gM",
  authDomain: "the-steel-marketplace.firebaseapp.com",
  projectId: "the-steel-marketplace",
  storageBucket: "the-steel-marketplace.appspot.com",
  messagingSenderId: "891322244969",
  appId: "1:891322244969:web:d234c9a035331e97e627f8",
  measurementId: "G-Q7WDERKBFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
