import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBCsDKDROD2YA2mGmdC6mdEY0XO7L5az8k",
  authDomain: "splash2-d2ab6.firebaseapp.com",
  projectId: "splash2-d2ab6",
  storageBucket: "splash2-d2ab6.appspot.com",
  messagingSenderId: "49975168926",
  appId: "1:49975168926:web:cfe4e89b65366c07ea908f",
};

const app = initializeApp(firebaseConfig);
//provider
// auth
export const auth = getAuth();

//storage
export const storage = getStorage();

export const db = getFirestore(app);
