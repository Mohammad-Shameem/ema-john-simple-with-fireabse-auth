// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWFR2kSwUgLin5_Xjc8US0hA5JbPV_HII",
    authDomain: "ema-john-simple-cf7ca.firebaseapp.com",
    projectId: "ema-john-simple-cf7ca",
    storageBucket: "ema-john-simple-cf7ca.appspot.com",
    messagingSenderId: "15157054126",
    appId: "1:15157054126:web:7189ce0782263bae84bb3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;    //amra auth ke ekhan thekei export korlam karon amra ekhan react firebase hook use korbo tai amader auth ekbar call korte hoy abar app ke call korte hoy. ebong app ke auth er kache dite hoy. tai kichu advantage pawar jonno sei kajta ekhane korlma ebong auth er kache app ke diye dilam ebong auth default export korlam.