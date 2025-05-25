// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKrblcrgBsn3Io9l6IwGB8zEYLYhuccRw",
  authDomain: "netflixgptclone-b43af.firebaseapp.com",
  projectId: "netflixgptclone-b43af",
  storageBucket: "netflixgptclone-b43af.firebasestorage.app",
  messagingSenderId: "97118272444",
  appId: "1:97118272444:web:562e6d44b62938b99249b9",
  measurementId: "G-WEN8RGVGJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);