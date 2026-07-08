import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC5y_GJimWLEFm2X75YxAi1NIykK8LLwg",
  authDomain: "shimsy-portfolio.firebaseapp.com",
  projectId: "shimsy-portfolio",
  storageBucket: "shimsy-portfolio.firebasestorage.app",
  messagingSenderId: "242327981789",
  appId: "1:242327981789:web:78071288e6cbd26f559534"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFirebase() {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: "Test Node",
      email: "test@node.com",
      message: "This is a test from Node",
      createdAt: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
    process.exit(0);
  } catch (e) {
    console.error("Error adding document: ", e);
    process.exit(1);
  }
}

testFirebase();
