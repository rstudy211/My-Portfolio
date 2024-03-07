// import React from "react";

// function Navbar() {
//   return (
//     <nav class="bg-gray-900 shadow sticky top-0 py-6 z-20">
//       <div class="container mx-auto px-6 md:px-0">
//         <div class="flex flex-row md:flex justify-between items-center">
//           <div class="md:flex  items-center">
//             <a
//               href="#hero"
//               id="hero"
//               class="block pr-6 text-2xl md:inline-block text-white font-bold mr-3"
//             >
//               PORT{" "}
//               <span className="bg-white text-gray-900 px-2 rounded">
//                 {" "}
//                 FOLIO
//               </span>
//             </a>
//             <div class="hidden md:flex items-center">
//               <a
//                 href="#about"
//                 class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
//               >
//                 About
//               </a>

//               <a
//                 href="#education"
//                 class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
//               >
//                 Education
//               </a>
//               <a
//                 href="#skills"
//                 class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
//               >
//                 Skills
//               </a>
//               <a
//                 href="#projects"
//                 class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-6"
//               >
//                 Projects
//               </a>
//               <a
//                 href="#contact"
//                 class="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//           {/* <div class="md:flex items-center mt-4 md:mt-0">
//             <a href="#" class="block text-gray-300 hover:text-white mr-6">
//               <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
//                 <path d="M448 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm-32 384H96V144h320v240zm0-272H96V96h320v16z" />
//               </svg>
//             </a>
//             <a href="#" class="block text-gray-300 hover:text-white">
//               <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
//                 <path d="M422.63 63.86C382.93 24.16 328.64 0 272 0S161.07 24.16 121.37 63.86c-39.7 40.7-63.86 95-63.86 151.63s24.16 110.93 63.86 151.63c40.7 40.7 95 63.86 151.63 63.86s110.93-24.16 151.63-63.86c40.7-40.7 63.86-95 63.86-151.63s-24.16-110.93-63.86-151.63zM272 255.88c-47.03 0-85.5-38.47-85.5-85.5S224.97 84.88 272 84.88s85.5 38.47 85.5 85.5-38.47 85.5-85.5 85.5z" />
//               </svg>
//             </a>
//           </div> */}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav class="bg-hero shadow sticky text-left  top-0 py-4 z-20">
      <div class="container mx-auto px-6 md:px-0">
        <div class="flex relative flex-row md:flex justify-between items-center">
          <div class=" md:flex w-full justify-between  items-center">
            {/* <a
              href="#hero"
              id="hero"
              class="block hidden pr-6 text-2xl md:inline-block text-white font-bold mr-3"
            >
              PORT{" "}
              <span className="bg-white text-gray-900 px-2 rounded">
                {" "}
                FOLIO
              </span>
            </a> */}
          <p class="text-3xl mr-5 text-gray-50 font-Leckerli tracking-wider ">Rajeev<span className="text-blue-600">.</span></p>

            <div
            
              class={`${
                showNavbar ? "block" : "hidden"

              } md:flex items-center 2xl:font-bold tracking-wider lg:gap-6 `}
            >
              <a
                href="#about"
                class="block mt-4 md:inline-block md:mt-0 text-gray-300 focus:outline-none active:text-violet-500 focus:ring transition-all duration-200 hover:bg-slate-700 py-1 px-4 rounded-full hover:text-gray-50 "
              >
                About
              </a>
              

              <a
                href="#education"
                class="block mt-4 md:inline-block md:mt-0 text-gray-300 focus:outline-none active:text-violet-500 focus:ring transition-all duration-200 hover:bg-slate-700 py-1 px-4 rounded-full hover:text-white "
              >
                Education
              </a>
              <a
                href="#skills"
                class="block mt-4 md:inline-block md:mt-0 text-gray-300 focus:outline-none active:text-violet-500 focus:ring transition-all duration-200 hover:bg-slate-700 py-1 px-4 rounded-full hover:text-white "
              >
                Skills
              </a>
              <a
                href="#projects"
                class="block mt-4 md:inline-block md:mt-0 text-gray-300  active:bg-blue-400 focus:ring focus:ring-violet-500 transition-all duration-200 hover:bg-slate-700 py-1 px-4 rounded-full hover:text-white "
              >
                Projects
              </a>
              
              
            </div>
            <a
                href="#contact"

                class={`${
                showNavbar ? "block" : "hidden"

              } mt-4 rounded-full ring-1 px-3 py-1 font-bold text-md focus-btn md:inline-block md:mt-0 text-center hover:text-slate-50`}
              
              > 
                Contact
              </a>
          </div>

          <button
            className="md:hidden absolute top-0 right-8 focus:outline-none"
            onClick={toggleNavbar}
          >
            <i
              className={`fas fa-bars text-gray-300 text-xl ${
                showNavbar ? "hidden" : ""
              }`}
            ></i>
            <i
              className={`fas fa-times text-gray-300 text-xl ${
                showNavbar ? "" : "hidden"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
