// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaJyjFV8BLm2_CwWSxUCvFxXu9ZgwsfZU",
    authDomain: "ema-john-simple-caea9.firebaseapp.com",
    projectId: "ema-john-simple-caea9",
    storageBucket: "ema-john-simple-caea9.appspot.com",
    messagingSenderId: "124993407209",
    appId: "1:124993407209:web:b1cd18e06b8579da404878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;   //amra auth ke ekhan thekei export korlam karon amra ekhan react firebase hook use korbo tai amader auth ekbar call korte hoy abar app ke call korte hoy. ebong app ke auth er kache dite hoy. tai kichu advantage pawar jonno sei kajta ekhane korlma ebong auth er kache app ke diye dilam ebong auth default export korlam.