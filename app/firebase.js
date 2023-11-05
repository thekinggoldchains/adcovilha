// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyYphs4Zreg3s4w16X3_HrMCey3RPgjD8",
    authDomain: "testeclick-7a64f.firebaseapp.com",
    databaseURL: "https://testeclick-7a64f-default-rtdb.firebaseio.com",
    projectId: "testeclick-7a64f",
    storageBucket: "testeclick-7a64f.appspot.com",
    messagingSenderId: "1065347130937",
    appId: "1:1065347130937:web:c359cf7caf44cb11c38fe8",
    measurementId: "G-GC17GYCJJN"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth} 