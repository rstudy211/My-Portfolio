import React from "react";

function Contact() {
  return (
    <div class="container mx-auto py-12 px-6" id="contact">
      <h2 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
        Get in Touch
      </h2>
      <div class="md:flex">
        <div class="md:w-1/3 md:pr-8">
          <p class="text-gray-700 mb-4">
            Want to work together or have a question? Send me a message and I'll
            get back to you as soon as possible.
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
  );
}

export default Contact;
