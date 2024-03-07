import React from "react";

function Footer() {
  return (
    <footer class="bg-hero py-8 overflow-x-hidden hidden md:block xl:block">
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
            <a
              href="https://github.com/rstudy211"
              class="mx-2 text-gray-100 hover:text-gray-400"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rajeev-mohan-031b801a2/"
              class="mx-2 text-gray-100 hover:text-gray-400"
            >
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
              rstudy211@gmail.com
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-100 mx-4">
              +91 9462748219
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
