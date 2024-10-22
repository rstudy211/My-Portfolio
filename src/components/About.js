import React from "react";
import resume from "../assets/Rajeev Latex.pdf";
import profilePicture from "../assets/profilePic.jpg";

function About() {
  return (
    <div className="bg-gray-900 text-center md:text-left" id="about">
      <div className="container mx-auto py-20 px-6 md:py-24">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          About Me
        </h2>
        <div className="md:flex md:justify-between md:items-center">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={profilePicture}
              alt="Profile picture"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-3/5">
            <h3 className="text-3xl font-bold text-white mb-8">
              Hi, I'm Rajeev Mohan
            </h3>
            <p className="text-gray-300 text-xl mb-6" data-aos="fade-up" data-aos-delay="500">
              I'm a Full-Stack Developer based in India. I specialize in
              building web applications using modern technologies such as
              <span className="text-green-400"> React</span>,
              <span className="text-blue-400"> Node.js</span>, and
              <span className="text-purple-400"> MongoDB</span>.
            </p>
            <p className="text-gray-300 text-xl mb-12" data-aos="fade-up" data-aos-delay="600">
              I have a passion for creating elegant and user-friendly
              interfaces that enhance the user experience. I'm constantly
              learning and staying up-to-date with the latest technologies to
              ensure that I'm delivering the best possible solutions to my
              clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="700">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-3xl font-bold text-purple-400">5+</h4>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-3xl font-bold text-blue-400">20+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-3xl font-bold text-green-400">500+</h4>
                <p className="text-gray-300">Problems Solved</p>
              </div>
            </div>
            <a
              href={resume}
              download
              data-aos="fade-up"
              data-aos-delay="800"
              className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-12 rounded-lg shadow-lg font-bold inline-block transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;