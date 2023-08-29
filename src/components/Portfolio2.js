import React from "react";
import "./portfolio2.css";
import SkillList from "./SkillList";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Hero from "./Hero";

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
      const sectionId = link.id;
      //   console.log(sectionId);
      scrollToSection(sectionId);
    });
  });

  return (
    <body class="bg-gray-[#ffff]   text-center md:text-left font-sans leading-normal tracking-normal">
      {/* <!-- Nav --> */}
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- About --> */}

      <About />
      <div
        id="education"
        className="container mx-auto py-20 pb-5 px-6"
        data-aos="fade-down"
        data-aos-offset="400"
      >
        <h3 class="text-2xl xl:text-4xl  font-bold text-gray-900 my-8">
          My Education
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div
            class="flex flex-col bg-gray-100 rounded-lg p-4"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h4 class="text-lg font-bold mb-2">B.Tech. Computer Science</h4>
            <p class="text-gray-700 mb-1">
              Government Engineering College Ajmer
            </p>
            <p class="text-gray-700">August 2018 - May 2022</p>
            <p class="text-gray-700">Affilliated to BTU Bikaner</p>
          </div>
          <div
            class="flex flex-col bg-gray-100 rounded-lg p-4"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h4 class="text-lg font-bold mb-2">12 th Math Science</h4>
            <p class="text-gray-700 mb-1">
              Government Sr Sec School Bargaow, KOTA
            </p>
            <p class="text-gray-700">Graduated May 2018</p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <SkillList />
      {/* <!-- Projects --> */}
      <Projects />
      {/* <!-- Contact --> */}
      <Contact />
      {/* <!-- Footer --> */}
      <Footer />
    </body>
  );
}

export default Portfolio2;
