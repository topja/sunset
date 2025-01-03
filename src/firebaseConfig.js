import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnSlYXnJEVtPabkHgt86FSiIJIdzO6tgE",
  authDomain: "sunset-reviews.firebaseapp.com",
  projectId: "sunset-reviews",
  storageBucket: "sunset-reviews.firebasestorage.app",
  messagingSenderId: "259062460434",
  appId: "1:259062460434:web:fba82b48137beb0903e8cb",
  measurementId: "G-94KB5RNZG2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
