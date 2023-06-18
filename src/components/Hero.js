import React from "react";
import cover from "../assets/person-on-computer.png";

function Hero() {
  return (
    <div class="bg-gray-800" id="hero">
      <div class="container mx-auto py-12 px-6 md:py-24 md:flex md:justify-between md:items-center">
        <div class="md:w-1/2">
          <h1 class="text-4xl  2xl:text-5xl font-bold text-white mb-2">
            I'm a Full-Stack Developer
          </h1>
          <p class="text-gray-300 text-xl 2xl:text-2xl mb-4">
            I build responsive, scalable, and performant web applications.
          </p>
          <div class="flex space-x-4 mb-5 text-3xl">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/rstudy211"
              class="text-gray-400 hover:text-white"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rajeev-mohan-031b801a2/"
              class="text-gray-400 hover:text-white"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <a
            href="#contact"
            class="bg-white text-gray-900 py-2 px-4 rounded-lg shadow-lg font-bold"
          >
            Get in touch
          </a>
        </div>
        <div class="md:w-1/2">
          <img
            src={cover}
            //   src="https://source.unsplash.com/900x600/?coding,programming"
            //   src="https://drive.google.com/file/d/1tL0R6A8WeB8CGgBQQTGFz8MW42p7C-1s/view?usp=share_link"
            alt="Coding image"
            class="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
