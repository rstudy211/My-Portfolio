import React from "react";

const projects = [
  {
    order: 0,
    imgSrc:
      "https://raw.githubusercontent.com/rstudy211/Chat-App/5d89e2bb82d3fa24079e19566630e1a668db1caa/Screenshot%202023-02-22%20at%202.41.52%20PM.png",
    name: "Chat-App",
    desc: `Chat-App is a React-based application that allows users to chat
    with each other in real-time. The app includes features such as
    the ability to create chat rooms, invite users to join a chat,
    and send text messages.`,
    gitLink: "https://github.com/rstudy211/Chat-App",
    techStack:[ 
      // { name: "HTML/CSS", icon: "fab fa-html5 fa-3x" },
    // { name: "JavaScript", icon: "fab fa-js fa-3x" },
    { name: "React.js", icon: "fab fa-react fa-3x" },
    // { name: "Node.js", icon: "fab fa-node fa-3x" },
    // { name: "Express.js", icon: "fas fa-server fa-3x" },
    { name: "Java", icon: "fab fa-java fa-3x" },
    { name: "MongoDB", icon: "fas fa-database fa-3x" },

    // { name: "Python", icon: "fab fa-python fa-3x" },
    // { name: "C++", icon: "fas fa-code fa-3x" },
    ]
  },
  {
    order: 1,
    imgSrc:
      "https://raw.githubusercontent.com/rstudy211/Blog-App/main/Frontend(React)/src/Images/Screenshot%202023-04-07%20at%2010.09.49%20PM.png",
    name: "Blog-App",
    desc: `The Blog App is a React-Spring Boot web application that allows
    users to create, read, update and delete blog posts. It uses
    MySQL to store the blog posts and provides features such as user
    account management, post search, filtering and sorting.
  `,
    gitLink: "https://github.com/rstudy211/Blog-App",
    techStack:[  
        { name: "React.js", icon: "fab fa-react fa-3x" },
    { name: "Java", icon: "fab fa-java fa-3x" },
    { name: "Mysql", icon: "fas fa-database fa-3x" },


  ]


  },
  {
    order: 2,
    imgSrc:
      "https://raw.githubusercontent.com/rstudy211/TodoApp/main/Screenshot%202022-09-24%20at%2011.58.52%20PM.png",
    name: "Todo-App",
    desc: `A Node.js, Express, and MongoDB-based todo app is a web tool for
    managing daily tasks. Users can add, update, or delete tasks,
    which are stored in a MongoDB database, and use search and
    filter options to organize and find their tasks.
  `,
    gitLink: "https://github.com/rstudy211/TodoApp",
    techStack:[   
       { name: "Node.js", icon: "fab fa-node fa-3x" },
    { name: "Express.js", icon: "fas fa-server fa-3x" },
    { name: "Mysql", icon: "fas fa-database fa-3x" },


  ]


  },
  {
    order: 0,
    imgSrc:
      "https://github.com/rstudy211/DigiCarda/raw/main/Screenshot%202023-03-20%20at%205.16.10%20PM.png",
    name: "DigiCarda",
    desc: ` Donec euismod felis non est hendrerit, in fermentum quam
    hendrerit. Etiam tristique blandit velit.
  `,
    gitLink: "https://github.com/rstudy211/DigiCarda",
    techStack:[        { name: "React.js", icon: "fab fa-react fa-3x" },
    { name: "Mysql", icon: "fas fa-database fa-3x" },

  ]


  },
];
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
              class={`bg-white  rounded-lg  md:pt-5  md:px-5 order-${project.order}   shadow-lg overflow-hidden`}
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
                  {project.techStack.map((tech,key)=>(
                    <div className="flex flex-col">
                    <p className={tech.icon + "border text-6xl"}>
                    
                    </p>
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
