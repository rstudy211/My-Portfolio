import React from "react";
import "./portfolio2.css";
import springIcon from "../assets/spring-boot.svg";
import cover from "../assets/person-on-computer.png";

function Portfolio2() {
  function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth" });
  }

  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  //   console.log(navLinks);
  navLinks.forEach((link) => {
    console.log("step1", link);
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      //   console.log(sectionId);
      scrollToSection(sectionId);
    });
  });

  return (
    <body class="bg-gray-[#ffff] font-sans leading-normal tracking-normal">
      {/* <!-- Nav --> */}
      <nav class="bg-gray-900 shadow sticky top-0 py-6 z-20">
        <div class="container mx-auto px-6 md:px-0">
          <div class="md:flex justify-between items-center">
            <div class="md:flex  items-center">
              <a
                href="#hero"
                class="block pr-6 text-2xl md:inline-block text-white font-bold"
              >
                PORT{" "}
                <span className="bg-white text-gray-900 px-2 rounded">
                  {" "}
                  FOLIO
                </span>
              </a>
              <div class="md:flex items-center">
                <a
                  href="#about"
                  class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
                >
                  About
                </a>
                <a
                  href="#projects"
                  class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
                >
                  Projects
                </a>
                <a
                  href="#education"
                  class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
                >
                  Education
                </a>
                <a
                  href="#skills"
                  class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
            <div class="md:flex items-center mt-4 md:mt-0">
              <a href="#" class="block text-gray-300 hover:text-white mr-6">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                  <path d="M448 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm-32 384H96V144h320v240zm0-272H96V96h320v16z" />
                </svg>
              </a>
              <a href="#" class="block text-gray-300 hover:text-white">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                  <path d="M422.63 63.86C382.93 24.16 328.64 0 272 0S161.07 24.16 121.37 63.86c-39.7 40.7-63.86 95-63.86 151.63s24.16 110.93 63.86 151.63c40.7 40.7 95 63.86 151.63 63.86s110.93-24.16 151.63-63.86c40.7-40.7 63.86-95 63.86-151.63s-24.16-110.93-63.86-151.63zM272 255.88c-47.03 0-85.5-38.47-85.5-85.5S224.97 84.88 272 84.88s85.5 38.47 85.5 85.5-38.47 85.5-85.5 85.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Hero --> */}
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
              <a href="#" class="text-gray-400 hover:text-white">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
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
      {/* <!-- About --> */}
      <div class="container mx-auto pt-20  px-6" id="about">
        <div className="bgcover shadow-md py-20 pb-20">
          <h2 class="text-3xl xl:text-5xl 2xl:text-6xl  font-bold text-gray-900 mb-16">
            About Me
          </h2>
          <div class="md:flex">
            <div class="md:flex items-center justify-center gap-22">
              <img
                //   src="https://source.unsplash.com/300x300/?person"
                src="https://drive.google.com/uc?id=1PkwjBzsQoDYjTk4RG_7KD5QhjfeSE7hG"
                alt="Profile picture"
                class="rounded-lg max-w-full max-h-full sm:max-w-sm md:max-w-sm lg:max-w-sm shadow-lg "
              />
              <div class="md:w-1/2 md:pr-8  lg:w-1/2 text-justify relative flex justify-center ">
                <div className="w-2/3 shadow bg-white rounded-md px-8 py-5">
                  <h2 class="text-3xl  font-bold text-gray-900 mb-4">
                    Hi, I'm Rajeev Mohan
                  </h2>
                  <p class="text-gray-700 mb-4">
                    I'm a Full-Stack Developer based in India. I specialize in
                    building web applications using modern technologies such as
                    React, Node.js, and MongoDB.
                  </p>
                  <p class="text-gray-700 mb-4">
                    I have a passion for creating elegant and user-friendly
                    interfaces that enhance the user experience. I'm constantly
                    learning and staying up-to-date with the latest technologies
                    to ensure that I'm delivering the best possible solutions to
                    my clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="education" className="container mx-auto py-20 pb-5 px-6">
        <h3 class="text-2xl xl:text-4xl  font-bold text-gray-900 my-8">
          My Education
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col bg-gray-100 rounded-lg p-4">
            <h4 class="text-lg font-bold mb-2">B.S. Computer Science</h4>
            <p class="text-gray-700 mb-1">University of California, Berkeley</p>
            <p class="text-gray-700">Graduated May 2015</p>
          </div>
          <div class="flex flex-col bg-gray-100 rounded-lg p-4">
            <h4 class="text-lg font-bold mb-2">B.S. Computer Science</h4>
            <p class="text-gray-700 mb-1">University of California, Berkeley</p>
            <p class="text-gray-700">Graduated May 2015</p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div id="skills" className="container mx-auto py-20 px-6">
        <h3 class="text-2xl xl:text-4xl font-bold text-gray-900 my-8">
          My Skills
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-20 ">
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fab fa-html5 fa-3x mb-2"></i>
            <p class="text-lg font-bold">HTML/CSS</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fab fa-js fa-3x mb-2"></i>
            <p class="text-lg font-bold">JavaScript</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fab fa-react fa-3x mb-2"></i>
            <p class="text-lg font-bold">React.js</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fab fa-node fa-3x mb-2"></i>
            <p class="text-lg font-bold">Node.js</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fas fa-database fa-3x mb-2"></i>
            <p class="text-lg font-bold">MongoDB</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fas fa-server fa-3x mb-2"></i>
            <p class="text-lg font-bold">Express.js</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fab fa-java fa-3x mb-2"></i>
            <p class="text-lg font-bold">Java</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fab fa-python fa-3x mb-2"></i>
            <p class="text-lg font-bold">Python</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <i class="fas fa-code fa-3x mb-2"></i>
            <p class="text-lg font-bold">C++</p>
          </div>
          <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4">
            <img
              src={springIcon}
              alt="Spring Boot"
              class="w-16 h-16 spring mb-2"
            />
            <p class="text-lg font-bold">Spring Boot</p>
          </div>
        </div>
      </div>
      {/* <!-- Projects --> */}
      <div class="bg-gray-100 py-12 px-6" id="projects">
        <div class="container pt-16 pb-5 mx-auto">
          <h2 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-14">
            My Projects
          </h2>
          <div class="grid md:grid-cols-2 pb-20 lg:grid-cols-3 gap-10">
            <div class="bg-white rounded-lg p-0 pt-5 px-5   shadow-lg overflow-hidden">
              {/* <img
                // src="https://source.unsplash.com/500x300/?coding,programming"
                src="https://raw.githubusercontent.com/rstudy211/Chat-App/blob/main/Screenshot%202023-02-22%20at%202.41.52%20PM.png"
                alt="Project image"
                class="w-full h-48 object-cover"
              /> */}
              <img
                src="https://raw.githubusercontent.com/rstudy211/Chat-App/5d89e2bb82d3fa24079e19566630e1a668db1caa/Screenshot%202023-02-22%20at%202.41.52%20PM.png"
                alt="Screenshot of Chat-App"
                class="w-full h-[250px]  border-8 rounded-md border-slate-800 object-top"
              />

              <div class="p-4">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Chat-App</h3>
                <p class="text-gray-700">
                  Chat-App is a React-based application that allows users to
                  chat with each other in real-time. The app includes features
                  such as the ability to create chat rooms, invite users to join
                  a chat, and send text messages.
                </p>
                <a
                  href="https://github.com/rstudy211/Chat-App"
                  class="block text-right text-gray-700 font-bold hover:text-gray-900"
                >
                  View Source Code →
                </a>
              </div>
            </div>
            <div class="bg-white rounded-lg p-0 pt-5 px-5 shadow-lg overflow-hidden">
              {/* <img
                src="https://source.unsplash.com/500x300/?coding,webdev"
                alt="Project image"
                class="w-full h-48 object-cover"
              /> */}
              <img
                src="https://raw.githubusercontent.com/rstudy211/TodoApp/main/Screenshot%202022-09-24%20at%2011.58.52%20PM.png"
                alt="TodoApp Screenshot"
                class="w-full h-[250px]  border-8 rounded-lg border-slate-800 object-top"
              />

              <div class="p-4 flex flex-col justify-between">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Todo-App</h3>
                <p class="text-gray-700">
                  A Node.js, Express, and MongoDB-based todo app is a web tool
                  for managing daily tasks. Users can add, update, or delete
                  tasks, which are stored in a MongoDB database, and use search
                  and filter options to organize and find their tasks.
                </p>
                <a
                  href="https://github.com/rstudy211/TodoApp"
                  class="block text-right text-gray-700 font-bold hover:text-gray-900"
                >
                  View Source Code →
                </a>
              </div>
            </div>
            <div class="bg-white rounded-lg p-0 pt-5 px-5 shadow-lg overflow-hidden">
              {/* <img
                // src="https://source.unsplash.com/500x300/?snakegame,frontend"
                src="https://raw.githubusercontent.com/rstudy211/DigiCarda/blob/main/Screenshot%202023-03-20%20at%205.16.10%20PM.png"
                alt="Project image"
                class="w-full h-48 object-cover"
              /> */}
              <img
                src="https://github.com/rstudy211/DigiCarda/raw/main/Screenshot%202023-03-20%20at%205.16.10%20PM.png"
                alt="Project image"
                class="w-full h-[250px]  border-8 rounded-lg border-slate-800 object-top"
              />

              <div class="p-4">
                <h3 class="text-xl font-bold text-gray-900 mb-2">DigiCarda</h3>
                <p class="text-gray-700">
                  Donec euismod felis non est hendrerit, in fermentum quam
                  hendrerit. Etiam tristique blandit velit.
                </p>
                <a
                  href="#"
                  class="block text-right text-gray-700 font-bold hover:text-gray-900"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contact --> */}
      <div class="container mx-auto py-12 px-6" id="contact">
        <h2 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <div class="md:flex">
          <div class="md:w-1/3 md:pr-8">
            <p class="text-gray-700 mb-4">
              Want to work together or have a question? Send me a message and
              I'll get back to you as soon as possible.
            </p>
          </div>
          <div class="md:w-2/3">
            <form action="#" method="POST">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus
:shadow-outline"
                  placeholder="Your message"
                ></input>
              </div>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Footer --> */}
      <footer class="bg-gray-900 py-8">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-center">
            <div>
              <a href="#" class="text-xl font-bold text-gray-100">
                FullStack Developer
              </a>
            </div>
            <div class="flex items-center -mx-2">
              <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="mt-8 flex justify-between border-t border-gray-800 pt-8">
            <div class="text-gray-400">
              &copy; 2023 FullStack Developer. All rights reserved.
            </div>
            <div class="flex items-center">
              <a href="#" class="text-gray-400 hover:text-gray-100 mx-4">
                Privacy Policy
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-100 mx-4">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default Portfolio2;
