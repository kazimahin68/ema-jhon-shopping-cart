// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHR_sSucSir4pM6qd8bwb7lsJddb8qmPI",
  authDomain: "ema-john-with-fb.firebaseapp.com",
  projectId: "ema-john-with-fb",
  storageBucket: "ema-john-with-fb.appspot.com",
  messagingSenderId: "655281361862",
  appId: "1:655281361862:web:53fe8aa6045135272398c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;