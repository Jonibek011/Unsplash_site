import { toast } from "react-toastify";
// firebase
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
//global context
import { useGlobalContext } from "./useGlobalContext";
export const useRegister = () => {
  const { dispatch } = useGlobalContext();
  const registerWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("wellcome");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const registerWithEmail = (userName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: `https://api.dicebear.com/9.x/initials/svg?seed=${userName}`,
        });
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Wellcome ${userName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };
  return { registerWithGoogle, registerWithEmail };
};
