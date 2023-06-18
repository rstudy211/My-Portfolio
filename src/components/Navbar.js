import React from "react";

function Navbar() {
  return (
    <nav class="bg-gray-900 shadow sticky top-0 py-6 z-20">
      <div class="container mx-auto px-6 md:px-0">
        <div class="md:flex justify-between items-center">
          <div class="md:flex  items-center">
            <a
              href="#hero"
              id="hero"
              class="block pr-6 text-2xl md:inline-block text-white font-bold mr-3"
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
                href="#projects"
                class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
              >
                Projects
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
  );
}

export default Navbar;
