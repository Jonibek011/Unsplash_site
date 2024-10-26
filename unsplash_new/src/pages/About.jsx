import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//aos
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about-section  bg-slate-950 relative">
      <img
        src="./grid.jpg"
        alt=""
        className="absolute z-20 top-0 left-0 w-full h-full opacity-10"
      />
      <div className="min-h-[90vh] flex flex-col  gap-4 items-center custom-container ">
        <span className="hidden absolute md:inline-block right-[15%] top-[12%] w-96 h-96 bg-indigo-600 rounded-full z-0"></span>
        <span className="absolute top-0 left-0 h-full w-full inline-block backdrop-blur-3xl z-10"></span>
        <span className="absolute bottom-[20%] inline-block w-[50vw] h-96 bg-purple-600 bg-opacity-45 rounded-full z-0"></span>
        <div className="relative z-20 flex min-h-[90vh]">
          <div className="about-info w-full lg:w-[50%] relative z-20 gap-5 flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold text-gray-400">
              Hello there !
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-duration="2000"
              className="name-title font-bold text-[40px] md:text-[50px] lg:text-[65px] text-orange-500 "
            >
              I'm Orifjonov Jonibek
            </h1>
            <h1
              data-aos="fade-left"
              data-aos-duration="2000"
              className="name-title text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300"
            >
              Frontend Developer
            </h1>
            <p className="text-ellipsis text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Perferendis, laudantium?
            </p>
            <button className="btn btn-secondary">See my works</button>
          </div>
          <div className="image-section hidden w-[40%] relative z-20 lg:flex justify-center items-center ps-20">
            <img
              src="./react.svg"
              className="react absolute w-full z-10 opacity-30 -left-32"
              alt=""
            />
            <div
              className="image main-image relative z-30 "
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                // data-aos="fade-up"
                // data-aos-duration="2000"
                src="about-image.jpg"
                alt="about-image.jpg"
                className=" w-[600px] opacity-70"
              />
            </div>
          </div>
        </div>
        <div className="relative z-20 min-h-[80vh]">
          <div className="about-section lg:px-[15vw] text-center">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              className="text-3xl font-semibold text-slate-500 "
            >
              Frontend Developer
            </h1>
            <p
              data-aos="flip-right"
              data-aos-duration="1500"
              className="text-slate-300 my-8 leading-10"
            >
              I am a frotend developer. I graduated Ferghana branch of Tashken
              medical academy in 2021. First I focused on sales of medicine
              about half year, then I started work at Bagdad medical association
              as a manager of family policlinics. 1 year before I decided to
              change my profession and chose IT. since 2023 year I have been
              learning Frontend Development
            </p>
            <Link
              to="/contact"
              type="button"
              className="btn btn-primary max-w-full mx-auto"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
