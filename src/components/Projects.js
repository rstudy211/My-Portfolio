import React from "react";

function Projects() {
  return (
    <div class="bg-gray-100 py-12 px-6" id="projects">
      <div class="container pt-16 pb-5 mx-auto">
        <h2 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-14">
          My Projects
        </h2>
        <div class="grid md:grid-cols-2 pb-20 lg:grid-cols-3 gap-10">
          <div class="bg-white rounded-lg p-0 pt-5 px-5 order-3   shadow-lg overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/rstudy211/Chat-App/5d89e2bb82d3fa24079e19566630e1a668db1caa/Screenshot%202023-02-22%20at%202.41.52%20PM.png"
              alt="Screenshot of Chat-App"
              class="w-full h-[320px] md:h-[245px] bg-black border-8 rounded-md border-slate-800 object-top"
            />

            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Chat-App</h3>
              <p class="text-gray-700  line-clamp-3">
                Chat-App is a React-based application that allows users to chat
                with each other in real-time. The app includes features such as
                the ability to create chat rooms, invite users to join a chat,
                and send text messages.
              </p>

              <a
                href="https://github.com/rstudy211/Chat-App"
                class="block mt-10 text-right text-gray-700 font-bold hover:text-gray-900"
              >
                View Source Code →
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg p-0 pt-5 px-5 order-2   shadow-lg overflow-hidden">
            {/* <img
                // src="https://source.unsplash.com/500x300/?coding,programming"
                src="https://raw.githubusercontent.com/rstudy211/Chat-App/blob/main/Screenshot%202023-02-22%20at%202.41.52%20PM.png"
                alt="Project image"
                class="w-full h-48 object-cover"
              /> */}
            <img
              src="https://raw.githubusercontent.com/rstudy211/Blog-App/main/Frontend(React)/src/Images/Screenshot%202023-04-07%20at%2010.09.49%20PM.png
                "
              alt="Screenshot of Chat-App"
              class="w-full h-[320px] md:h-[245px] bg-black border-8 rounded-md border-slate-800 object-top"
            />

            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Blog-App</h3>
              <p class="text-gray-700  line-clamp-3">
                The Blog App is a React-Spring Boot web application that allows
                users to create, read, update and delete blog posts. It uses
                MySQL to store the blog posts and provides features such as user
                account management, post search, filtering and sorting.
              </p>

              <a
                href="https://github.com/rstudy211/Blog-App"
                class="block mt-10 text-right text-gray-700 font-bold hover:text-gray-900"
              >
                View Source Code →
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg p-0 pt-5 px-5 order-2 shadow-lg overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/rstudy211/TodoApp/main/Screenshot%202022-09-24%20at%2011.58.52%20PM.png"
              alt="TodoApp Screenshot"
              class="w-full h-[320px] md:h-[245px]  border-8 rounded-lg border-slate-800 object-top"
            />

            <div class="p-4 flex flex-col justify-between">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Todo-App</h3>
              <p class="text-gray-700  line-clamp-3">
                A Node.js, Express, and MongoDB-based todo app is a web tool for
                managing daily tasks. Users can add, update, or delete tasks,
                which are stored in a MongoDB database, and use search and
                filter options to organize and find their tasks.
              </p>
              <a
                href="https://github.com/rstudy211/TodoApp"
                class="block mt-10 text-right text-gray-700 font-bold hover:text-gray-900"
              >
                View Source Code →
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg p-0 pt-5 px-5 order-1 shadow-lg overflow-hidden">
            <img
              src="https://github.com/rstudy211/DigiCarda/raw/main/Screenshot%202023-03-20%20at%205.16.10%20PM.png"
              alt="Project image"
              class="w-full h-[320px] md:h-[245px]  border-8 rounded-lg border-slate-800 object-top"
            />

            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">DigiCarda</h3>
              <p class="text-gray-700 line-clamp-3">
                Donec euismod felis non est hendrerit, in fermentum quam
                hendrerit. Etiam tristique blandit velit.
              </p>
              <a
                href="#"
                class="block mt-10 text-right text-gray-700 font-bold hover:text-gray-900"
              >
                View source code →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
