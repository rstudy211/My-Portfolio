import React from "react";
import projects from "../assets/data/projects";

function Projects() {
  return (
    <div
      class="bg-gray-100 py-12 px-1 md:px-6"
      id="projects"
      data-aos="fade-up"
      data-aos-offset="300"
    >
      <div class="container pt-16 px-3 pb-5 mx-auto">
        <h2 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-14">
          My Projects
        </h2>
        <div class="grid md:grid-cols-2 pb-20 lg:grid-cols-3 gap-14 md:gap-10">
          {projects.map((project, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={100 * index}
              class={`bg-white  rounded-lg  md:pt-5  md:px-5 order-0   shadow-lg overflow-hidden`}
            >
              <div class="relative group/item border-8 rounded-md overflow-hidden  border-slate-800 object-top bg-black  ">
                <img
                  src={project.imgSrc}
                  alt="Screenshot of Chat-App"
                  class="w-full group-hover/item:opacity-30 duration-200 h-[200px] sm:h-[350px] md:h-[240px] group-hover/item:scale-105    "
                />
                <div class="group/edit absolute inset-0 delay-100 invisible group-hover/item:visible text-white">
                  <p class=" text-4xl py-5  text-center">Tech Stack</p>
                  <div class="grid grid-cols-3 justify-center text-center  gap-y-4  mt-5">
                    {project.techStack.map((tech, key) => (
                      <div className="flex flex-col">
                        <p className={tech.icon + "border text-6xl"}></p>
                        <p className="text-sm ">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div class="p-4">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p class="text-gray-700  line-clamp-3">{project.desc}</p>

                <a
                  href={project.gitLink}
                  class="block mt-10 text-right text-gray-400 transition-all duration-500 font-bold hover:text-gray-900"
                >
                  View Source Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
