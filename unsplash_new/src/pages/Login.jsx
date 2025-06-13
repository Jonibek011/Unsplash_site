import { Form, Link, useActionData } from "react-router-dom";

import FormInput from "../components/FormInput";
//react-icons
import { FcGoogle } from "react-icons/fc";

//firebase
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
// hooks
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";
import { Modal } from "../components";
import { toast } from "react-toastify";

//action
export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const password_reset = form.get("email_reset");

  if (password_reset?.trim()) {
    return { password_reset };
  }

  return {
    email,
    password,
  };
};
function Login() {
  const { registerWithGoogle } = useRegister();
  const { loginWithEmailAndPassword } = useLogin();
  const formData = useActionData();

  useEffect(() => {
    if (formData?.email && formData?.password) {
      loginWithEmailAndPassword(formData.email, formData.password);
    }
  }, [formData]);

  useEffect(() => {
    if (formData?.password_reset) {
      sendPasswordResetEmail(auth, formData.password_reset)
        .then(() => {
          toast.success("Reset request sent");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  }, [formData]);

  return (
    <>
      <div className="w-full min-h-[100vh] flex ">
        <div className="bg-image md:block hidden w-[40%] bg-[url('https://picsum.photos/600')] bg-center bg-cover"></div>
        <div className="main-info w-full md:w-[60%]  flex justify-center items-center bg-[url('https://picsum.photos/600')] bg-center bg-cover  md:bg-none ">
          <span className="absolute top-0 left-0 w-full h-full inline-block  main-span bg-black bg-opacity-55 md:hidden"></span>
          <Form
            method="post"
            className="register-form max-w-96 w-full  z-10  px-4 md:px-0"
          >
            <h1 className="text-3xl md:text-4xl mb-10 font-semibold text-center text-white md:text-black ">
              Login
            </h1>
            <div className="flex flex-col gap-4 md:gap-7 ">
              <FormInput
                placeholder="Enter your email"
                type="email"
                name="email"
                className="text-black"
              />

              <FormInput
                placeholder="Your password"
                type="password"
                name="password"
              />
            </div>

            <div className="flex gap-3 md:gap-4 justify-center items-center mt-10 flex-col md:flex-row max-w-96 ">
              <button className="btn grow btn-sm md:btn-md  btn-primary w-full md:w-auto">
                Login
              </button>
              <button
                onClick={registerWithGoogle}
                type="button"
                className="btn grow btn-sm md:btn-md  btn-secondary w-full md:w-auto"
              >
                Google <FcGoogle className="w-5 h-5" />
              </button>
            </div>
            <div className="links flex justify-between mt-3 text-white md:text-blue-800 text-sm">
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                type="button"
                className="underline"
              >
                Forgot password ?
              </button>
              <Link to="/register" className="underline">
                You don't have an account ?
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <Modal />
    </>
  );
}

export default Login;
