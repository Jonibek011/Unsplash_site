//react
import { useEffect } from "react";

import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
//hooks
import { useRegister } from "../hooks/useRegister";
//react-icons
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const userName = form.get("userName");
  const email = form.get("email");
  const password = form.get("password");
  const confirm_password = form.get("confirm_password");

  if (password == confirm_password) {
    return {
      userName,
      email,
      password,
      confirm_password,
    };
  } else {
    toast.warn("password are not iquel !");
    return null;
  }
};

function Register() {
  const { registerWithGoogle, registerWithEmail } = useRegister();
  const formInfo = useActionData();

  //register with email
  useEffect(() => {
    if (formInfo) {
      registerWithEmail(formInfo.userName, formInfo.email, formInfo.password);
    }
  }, [formInfo]);
  return (
    <div className="w-full min-h-[100vh] flex ">
      <div className="bg-image md:block hidden w-[40%] bg-[url('https://picsum.photos/600')] bg-center bg-cover"></div>
      <div className="main-info w-full md:w-[60%]  flex justify-center items-center bg-[url('https://picsum.photos/600')]  bg-center bg-cover md:bg-none ">
        <span className="absolute top-0 left-0 w-full h-full inline-block bg-black  bg-opacity-55 main-span md:hidden"></span>
        <Form
          method="post"
          className="register-form max-w-96 w-full z-10 px-4 md:px-0 "
        >
          <h1 className="text-3xl md:text-4xl mb-10 font-semibold text-center text-white md:text-black ">
            Register
          </h1>
          <div className="flex flex-col gap-4 md:gap-7 ">
            <FormInput
              placeholder="Enter your user name"
              type="text"
              name="userName"
              className="text-black"
            />

            <FormInput placeholder="Your email" type="email" name="email" />
            <FormInput
              placeholder="Your password"
              type="password"
              name="password"
            />
            <FormInput
              placeholder="Confirm password"
              type="password"
              name="confirm_password"
            />
          </div>

          <div className="flex gap-3 md:gap-4 justify-center items-center mt-10 flex-col md:flex-row max-w-96 ">
            <button
              type="submit"
              className="btn grow btn-sm md:btn-md  btn-primary w-full md:w-auto"
            >
              Register
            </button>
            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn grow btn-sm md:btn-md  btn-secondary w-full md:w-auto"
            >
              Google <FcGoogle className="w-5 h-5" />
            </button>
          </div>

          <div className="text-white md:text-blue-900 flex justify-end mt-4">
            <Link to="/login" className="underline text-sm ">
              Already have an account ?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
