//react-icons
import { FaRegCircleUser, FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { Form } from "react-router-dom";

//sendimg emailjs
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79igx85",
        "template_vpkahls",
        formRef.current,
        "WLtNqH1QxPi3uEcWk"
      )
      .then(() => {
        toast.info("Message sent!");
        formRef.current.reset();
      })
      .catch((err) => {
        toast.error(err.text);
      });
  };

  return (
    <div className="min-h-[100vh]  bg-black">
      <img
        src="./bg-contact3.jpg"
        alt=""
        className="absolute  top-0 left-0 w-full h-[100vh] opacity-70 z-20"
      />
      <span className="absolute top-0 left-0 w-full h-[100vh] backdrop-blur-3xl z-10"></span>
      <span className="absolute inline-block w-96 h-[90vh] bg-indigo-600 rounded-full top-[10%] right-[10%]"></span>
      <div className="custom-container  min-h-[100vh]  flex flex-col md:flex-row items-center relative z-30">
        <div className="contact-info my-10  w-full md:w-[50%] h-full flex gap-8 justify-center  flex-col text-slate-300">
          <h1 className=" text-2xl font-semibold">Contact details</h1>
          <p className="flex gap-2 items-center">
            <FaRegCircleUser className="w-6 h-6" /> NAME: Orifjonov Jonibek
          </p>
          <p className="flex gap-2 items-center">
            <FaHome className="w-6 h-6" /> ADRESS: Konizar-42, Bagdad dist.
            Ferghana
          </p>
          <p className="flex gap-2 items-center">
            <MdOutlineAlternateEmail className="w-6 h-6" /> EMAIL:
            jonibektanks@gmail.com
          </p>
          <p className="flex gap-2 items-center">
            <FaPhoneVolume className="w-6 h-6" /> PHONE: +998 91-699-94-98
          </p>
        </div>
        <div className="contact-form w-full md:w-[50%] flex justify-center items-center">
          <Form
            ref={formRef}
            onSubmit={sendEmail}
            method="POST"
            className="flex flex-col gap-8 md:border rounded-xl w-full md:w-[80%] border-orange-300 py-10 px-4"
          >
            <h1 className="contact-title text-white font-semibold text-3xl text-center ">
              Contact me
            </h1>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="py-2 px-4 rounded-3xl bord border border-orange-300 outline-none text-white  bg-transparent"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              className="py-2 px-4 rounded-3xl bord border border-orange-300 outline-none text-white  bg-transparent"
            />
            <textarea
              className="py-2 px-4 rounded-3xl bord border border-orange-300 outline-none text-white  bg-transparent"
              rows={10}
              name="message"
              id="textArea"
              placeholder="Your message"
            ></textarea>
            <button className="text-white py-2 px-10 border border-orange-300 bg-black rounded-3xl mx-auto">
              Send
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
