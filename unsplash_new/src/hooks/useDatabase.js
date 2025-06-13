import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useDatabase = () => {
  const addDocument = async (collectionName, data) => {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  };

  return { addDocument };
};
