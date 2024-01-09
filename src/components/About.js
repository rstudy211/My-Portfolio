import React, { useEffect, useState } from "react";
import resume from "../assets/Rajeev Latex.pdf";
import profilePicture from "../assets/profilePic.jpg";

function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define your mobile breakpoint here
    };

    handleResize(); // Check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="w-full md:container mx-auto md:pt-20 px-6"
      id="about"
      data-aos="fade-up"
      data-aos-offset="400"
    >
      <div className={`shadow-md py-20 pb-20 ${isMobile ? "" : "bgcover"}`}>
        <h2
          className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          About Me
        </h2>
        <div className="md:flex items-center justify-center gap-10">
          <img
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            src={profilePicture}
            alt="Profile picture"
            className="rounded-lg max-w-full h-auto lg:max-h-full sm:max-w-sm md:max-w-sm lg:max-w-sm shadow-lg"
          />
          <div className="md:w-1/2 md:pr-8 lg:w-1/2">
            <div className="bg-white rounded-md shadow p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hi, I'm Rajeev Mohan
              </h2>
              <p className="text-gray-700 mb-4">
                I'm a Full-Stack Developer based in India. I specialize in
                building web applications using modern technologies such as
                React, Node.js, and MongoDB.
              </p>
              <p className="text-gray-700 mb-4">
                I have a passion for creating elegant and user-friendly
                interfaces that enhance the user experience. I'm constantly
                learning and staying up-to-date with the latest technologies to
                ensure that I'm delivering the best possible solutions to my
                clients.
              </p>
              <div className="text-center mt-8">
                <a
                  href={resume}
                  download
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
