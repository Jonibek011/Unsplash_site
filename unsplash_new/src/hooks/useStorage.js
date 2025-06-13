//firebase storage
import { ref, uploadString } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { user } from "@nextui-org/react";
//global context
import { useGlobalContext } from "./useGlobalContext";

//main function
export const useStorage = () => {
  //   const { user, dispatch } = useGlobalContext();
  //   const updateProfileImage = (imageBase64) => {
  //     const storageRef = ref(storage, `profileImage/${user.uid}.png`);
  //   };
  //   return { updateProfileImage };
};
