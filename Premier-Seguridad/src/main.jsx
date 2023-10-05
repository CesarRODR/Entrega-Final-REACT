import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQG-Zmnv6_fYs5nK1YZxWsSp0mr2Vzbac",
  authDomain: "productos-f258b.firebaseapp.com",
  projectId: "productos-f258b",
  storageBucket: "productos-f258b.appspot.com",
  messagingSenderId: "800038468767",
  appId: "1:800038468767:web:3b2267287966cfe68f76aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
