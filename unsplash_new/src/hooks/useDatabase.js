import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useDatabase = () => {
  const addDocument = async (collectionName, data) => {
    await addDoc(collection(db, collectionName), data);
  };

  const deleteDocument = async (collectionName, id) => {
    await deleteDoc(doc(db, collectionName, id));
  };

  return { addDocument, deleteDocument };
};
