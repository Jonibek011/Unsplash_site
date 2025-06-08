//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
//auth
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
//globalContext
import { useGlobalContext } from "./useGlobalContext";
export function useLogin() {
  const { dispatch } = useGlobalContext();
  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Wellcome again :)");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Email or password is incorrect !");
      });
  };
  return { loginWithEmailAndPassword };
}
