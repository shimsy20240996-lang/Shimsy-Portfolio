import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.VITE_FIREBASE_APP_ID || ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function readMessages() {
  try {
    const querySnapshot = await getDocs(collection(db, "messages"));
    console.log(`Found ${querySnapshot.size} messages:\n`);
    querySnapshot.forEach((doc) => {
      console.log(`--- ID: ${doc.id} ---`);
      console.log(doc.data());
      console.log("");
    });
    process.exit(0);
  } catch (e) {
    console.error("Error reading documents: ", e);
    process.exit(1);
  }
}

readMessages();
