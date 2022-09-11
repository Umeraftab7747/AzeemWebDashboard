// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQTBrpyEl28Tki1ZaOel5sWnlXpLlsRAA",
  authDomain: "ecommerce-app-27454.firebaseapp.com",
  databaseURL: "https://ecommerce-app-27454-default-rtdb.firebaseio.com",
  projectId: "ecommerce-app-27454",
  storageBucket: "ecommerce-app-27454.appspot.com",
  messagingSenderId: "478517397811",
  appId: "1:478517397811:web:a50b35e3b30a6a12ac9646",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
