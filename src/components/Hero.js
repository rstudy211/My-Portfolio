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
    // <div class="bg-gray-800  text-center md:text-left " id="hero">
    //   <div class="container mx-auto py-12 px-6 md:py-24 md:flex md:justify-between md:items-center">
    //     <div class="md:w-1/2">
    //       <h1 class="text-4xl  2xl:text-5xl font-bold text-white mb-2">
    //         I'm a Full-Stack Developer
    //       </h1>
    //       <p class="text-gray-300 text-xl 2xl:text-2xl mb-4">
    //         I build responsive, scalable, and performant web applications.
    //       </p>
    //       <div class="flex space-x-4 mb-5 text-3xl">
    //         <a href="#" class="text-gray-400 hover:text-white">
    //           <i class="fab fa-twitter"></i>
    //         </a>
    //         <a
    //           href="https://github.com/rstudy211"
    //           class="text-gray-400 hover:text-white"
    //         >
    //           <i class="fab fa-github"></i>
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/in/rajeev-mohan-031b801a2/"
    //           class="text-gray-400 hover:text-white"
    //         >
    //           <i class="fab fa-linkedin"></i>
    //         </a>
    //       </div>
    //       <a
    //         href="#contact"
    //         class="bg-white text-gray-900 py-2 px-4 rounded-lg shadow-lg font-bold"
    //       >
    //         Get in touch
    //       </a>
    //     </div>
    //     <div class="md:w-1/2">
    //       <img
    //         src={cover}
    //         //   src="https://source.unsplash.com/900x600/?coding,programming"
    //         //   src="https://drive.google.com/file/d/1tL0R6A8WeB8CGgBQQTGFz8MW42p7C-1s/view?usp=share_link"
    //         alt="Coding image"
    //         class="rounded-lg shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </div>
    // <div class="bg-gray-900 text-center md:text-left" id="hero">
    //   <div class="container mx-auto py-12 px-6 md:py-24 md:flex md:justify-between md:items-center">
    //     <div class="md:w-1/2">
    //       <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">
    //         I'm a <span class="text-green-400">Full-Stack</span> Developer
    //       </h1>
    //       <p class="text-gray-300 text-xl md:text-2xl mb-12">
    //         I specialize in building{" "}
    //         <span class="text-green-400">responsive</span>,{" "}
    //         <span class="text-blue-400">scalable</span>, and{" "}
    //         <span class="text-purple-400">performant</span> web applications.
    //       </p>
    //       <div class="flex justify-center md:justify-start space-x-6 mb-16">
    //         <a
    //           href="#"
    //           class="text-gray-400 hover:text-white transition-colors duration-300"
    //         >
    //           <i class="fab fa-twitter"></i>
    //         </a>
    //         <a
    //           href="https://github.com/rstudy211"
    //           class="text-gray-400 hover:text-white transition-colors duration-300"
    //         >
    //           <i class="fab fa-github"></i>
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/in/rajeev-mohan-031b801a2/"
    //           class="text-gray-400 hover:text-white transition-colors duration-300"
    //         >
    //           <i class="fab fa-linkedin"></i>
    //         </a>
    //       </div>
    //       <a
    //         href="#contact"
    //         class="bg-purple-600 hover:bg-purple-700 text-white py-4 px-12 rounded-lg shadow-lg font-bold inline-block transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
    //       >
    //         Get in touch
    //       </a>
    //     </div>
    //     <div class="md:w-1/2">
    //       <img
    //         src={cover}
    //         alt="Coding image"
    //         class="rounded-lg shadow-lg w-full h-auto"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-900 text-center md:text-left" id="hero">
      <div className="container mx-auto py-20 px-6 md:py-24 md:flex md:justify-between md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {typingText}
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-12">
            I specialize in building{" "}
            <span className="text-green-400">responsive</span>,{" "}
            <span className="text-blue-400">scalable</span>, and{" "}
            <span className="text-purple-400">performant</span> web
            applications.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mb-16">
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
            className="bg-purple-600 md:mb-0 mb-12 hover:bg-purple-700 text-white py-4 px-12 rounded-lg shadow-lg font-bold inline-block transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Get in touch
          </a>
        </div>
        <div className=" md:w-4/5 lg:w-3/4 xl:w-2/3">
          <img
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
