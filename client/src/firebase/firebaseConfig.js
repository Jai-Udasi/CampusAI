import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDS8BShPo8PuN5mjg-DzbASq7VkMQ83NMw",
  authDomain: "campusai-jai21.firebaseapp.com",
  projectId: "campusai-jai21",
  storageBucket: "campusai-jai21.firebasestorage.app",
  messagingSenderId: "790212845500",
  appId: "1:790212845500:web:e1b846523532c9438355b9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;