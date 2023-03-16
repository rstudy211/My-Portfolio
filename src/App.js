import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div className="App">
    <body class="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* <!-- Header --> */}
      <header class="bg-white">
        <div class="container mx-auto flex justify-between items-center py-4">
          <nav class="w-full sm:w-auto flex items-center text-gray-800">
            <a href="#" class="text-lg font-semibold mr-8">
              My Portfolio
            </a>
            <ul class="text-sm sm:text-base flex flex-wrap items-center">
              <li class="mr-6">
                <a href="#about" class="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li class="mr-6">
                <a href="#experience" class="text-gray-600 hover:text-gray-800">
                  Experience
                </a>
              </li>
              <li class="mr-6">
                <a href="#projects" class="text-gray-600 hover:text-gray-800">
                  Projects
                </a>
              </li>
              <li class="mr-6">
                <a href="#skills" class="text-gray-600 hover:text-gray-800">
                  Skills
                </a>
              </li>
              <li class="mr-6">
                <a href="#contact" class="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <!-- About --> */}
      <section id="about" class="bg-gray-100 py-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
              <h2 class="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
              <p class="text-gray-700 leading-loose mb-12">
                I am a full stack Java developer with experience in developing
                web applications using Java, Spring Boot, React and other modern
                technologies. I have a passion for learning new technologies and
                solving complex problems to create great user experiences.
              </p>
              <a
                href="#contact"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Contact Me
              </a>
            </div>
            <div class="w-full md:w-1/2 flex justify-center items-center">
              <img
                src="https://source.unsplash.com/600x600/?developer"
                alt="Developer"
                class="w-full rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Experience --> */}
      <section id="experience" class="bg-white py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-gray-800 mb-8">Experience</h2>
          <div class="flex flex-wrap mb-12">
            <div class="w-full md:w-1/3">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Software Engineer
              </h3>
              <p class="text-gray-600 mb-4">ABC Company</p>
              <p class="text-gray-700 leading-loose mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae libero a quam sagittis vestibulum. Suspendisse aliquam
                blandit vulputate.
              </p>
              <p class="text-gray-600">May 2018 - Present</p>
            </div>
            <div class="w-full md:w-1/3">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Web Developer
              </h3>
              <p class="text-gray-600 mb-4">XYZ Agency</p>
              <p class="text-gray-700 leading-loose mb-4">
                Phasellus nec aliquam dolor. In convallis erat vel purus
                aliquam, sit amet ultrices urna vestibulum. Nullam nec nisi quis
                elit vulputate ultrices vel vel neque.
              </p>
              <p class="text-gray-600">Jan 2016 - May 2018</p>
            </div>
            <div class="w-full md:w-1/3">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Software Engineer Intern
              </h3>
              <p class="text-gray-600 mb-4">PQR Inc.</p>
              <p class="text-gray-700 leading-loose mb-4">
                Maecenas congue sodales velit eu ultricies. Nam eget sagittis
                odio. Vestibulum pulvinar orci nec leo scelerisque auctor.
              </p>
              <p class="text-gray-600">May 2015 - Aug 2015</p>
            </div>
          </div>

          <a
            href="#projects"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            View Projects
          </a>
        </div>
      </section>
      {/* <!-- Projects --> */}
      <section id="projects" class="bg-gray-100 py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
          <div class="flex flex-wrap mb-12">
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Project Name
                </h3>
                <p class="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vitae libero a quam sagittis vestibulum.
                </p>
                <a href="#" class="text-blue-500 hover:text-blue-600">
                  View Project
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Project Name
                </h3>
                <p class="text-gray-600 mb-4">
                  Phasellus nec aliquam dolor. In convallis erat vel purus
                  aliquam, sit amet ultrices urna vestibulum. Nullam nec nisi
                  quis elit vulputate ultrices vel vel neque.
                </p>
                <a href="#" class="text-blue-500 hover:text-blue-600">
                  View Project
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Project Name
                </h3>
                <p class="text-gray-600 mb-4">
                  Maecenas congue sodales velit eu ultricies. Nam eget sagittis
                  odio. Vestibulum pulvinar orci nec leo scelerisque auctor.
                </p>
                <a href="#" class="text-blue-500 hover:text-blue-600">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section id="contact" class="bg-white py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 px-4">
              <form action="#" class="mb-8">
                <div class="mb-4">
                  <label for="name" class="block text-gray-700 font-bold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 font-bold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="subject"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="message"
                    class="block text-gray-700 font-bold mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Send
                </button>
              </form>
            </div>
            <div class="w-full md:w-1/2 px-4">
              <div class="flex flex-col h-full justify-center">
                <p class="text-gray-700 mb-2">
                  <i class="fas fa-map-marker-alt mr-2"></i>123 Main St, Anytown
                  USA
                </p>
                <p class="text-gray-700 mb-2">
                  <i class="fas fa-phone-alt mr-2"></i>(123) 456-7890
                </p>
                <p class="text-gray-700 mb-2">
                  <i class="fas fa-envelope mr-2"></i>example@example.com
                </p>
                <div class="mt-4">
                  <ul class="flex">
                    <li class="mr-4">
                      <a href="#" class="text-blue-500 hover:text-blue-600">
                        <i class="fab fa-twitter"></i>
                        <span class="sr-only">Twitter</span>
                      </a>
                    </li>
                    <li class="mr-4">
                      <a href="#" class="text-blue-500 hover:text-blue-600">
                        <i class="fab fa-linkedin-in"></i>
                        <span class="sr-only">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-blue-500 hover:text-blue-600">
                        <i class="fab fa-github"></i>
                        <span class="sr-only">GitHub</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer class="bg-gray-900 text-white py-10">
        <div class="container mx-auto px-4">
          <p class="text-center">
            &copy; 2022 Full Stack Java Developer Portfolio. All rights
            reserved.
          </p>
        </div>
      </footer>
      {/* <!-- Font Awesome --> */}
      <script
        src="https://kit.fontawesome.com/af19c472ad.js"
        crossorigin="anonymous"
      ></script>
    </body>
    // </div>
  );
}

export default App;
