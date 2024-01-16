// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoVjAji8HPqkAKfPX5jzzvJGlI6JjH6BQ",
    authDomain: "react-chat-app-5a12b.firebaseapp.com",
    projectId: "react-chat-app-5a12b",
    storageBucket: "react-chat-app-5a12b.appspot.com",
    messagingSenderId: "893159264810",
    appId: "1:893159264810:web:6c5b315ff71d2537bae953",
    measurementId: "G-LV47W2DV1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);