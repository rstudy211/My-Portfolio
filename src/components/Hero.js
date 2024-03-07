import React, { useEffect, useState } from "react";
import cover from "../assets/person-on-computer.png";

function Hero() {
  const [typingText, setTypingText] = useState("");
  const textToType = "I'm a Full-Stack Developer";
  let index = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < textToType.length) {
        setTypingText((prevText) => prevText + textToType.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="bg-hero text-center md:text-left" id="hero">
      <div className="container mx-auto py-20 px-6 md:py-24 md:flex md:justify-between md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 ">
            {typingText}
          </h1>
          <p
            className="text-gray-300 text-xl md:text-2xl mb-12"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            I specialize in building{" "}
            <span
              className="text-green-400 "
              data-aos="fade-down"
              data-aos-delay="500"
            >
              responsive
            </span>
            , <span className="text-blue-400">scalable</span>, and{" "}
            <span className="text-purple-400">performant</span> web
            applications.
          </p>
          <div
            className="flex  justify-center md:justify-start space-x-6 mb-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="#"
              className="text-gray-400 text-2xl md:text-3xl hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/rstudy211"
              className="text-gray-400 text-2xl md:text-3xl hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rajeev-mohan-031b801a2/"
              className="text-gray-400 text-2xl md:text-3xl hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <a
            href="#contact"
            data-aos="fade-up"
            data-aos-delay="700"
            className="bg-purple-600 md:mb-0 mb-12 hover:bg-purple-700 text-white py-4 px-12 rounded-lg shadow-lg font-bold inline-block transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Get in touch
          </a>
        </div>
        <div className=" md:w-4/5 lg:w-3/4 xl:w-2/3">
          <img
            data-aos="fade-up"
            data-aos-delay="800"
            src={cover}
            alt="Coding image"
            className="rounded-lg shadow-lg w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
