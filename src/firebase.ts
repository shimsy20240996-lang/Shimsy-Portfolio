import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC5y_GJimWLEFm2X75YxAi1NIykK8LLwg",
  authDomain: "shimsy-portfolio.firebaseapp.com",
  projectId: "shimsy-portfolio",
  storageBucket: "shimsy-portfolio.firebasestorage.app",
  messagingSenderId: "242327981789",
  appId: "1:242327981789:web:78071288e6cbd26f559534"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
