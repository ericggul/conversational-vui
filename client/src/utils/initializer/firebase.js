// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCG0uVy7fyC_Mvg6eE5NPKOlCWrpkl6wc",
  authDomain: "please-open-a-console.firebaseapp.com",
  projectId: "please-open-a-console",
  storageBucket: "please-open-a-console.appspot.com",
  messagingSenderId: "129451579233",
  appId: "1:129451579233:web:86c7b0a70acdf406b6d720",
  measurementId: "G-TP10P611ET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage = getStorage(app);
