import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export const useCollection = (collectionName, Arr) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!collectionName || !Arr) return;

    const q = query(collection(db, collectionName), where(...Arr));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const collectionData = [];
      querySnapshot.forEach((doc) => {
        collectionData.push({ _id: doc.id, ...doc.data() });
      });
      setData(collectionData);
      setLoader(false);
    });

    // 🧹 Listenerni tozalash
    return () => unsubscribe();
  }, [collectionName, JSON.stringify(Arr)]);

  return { data, loader };
};
