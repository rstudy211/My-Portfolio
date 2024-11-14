import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `https://email-sender-service-gnfi.onrender.com/api/send-email`,
        formData
      );
      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData(initialFormData);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white py-20 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get in Touch
        </h2>
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div 
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8">
                Have a project in mind or want to explore collaboration opportunities?
                I'm always excited to hear new ideas and take on challenging projects.
                Drop me a message, and let's create something amazing together!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-clock text-green-400 mr-4"></i>
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-globe text-blue-400 mr-4"></i>
                  <span>Available for remote work worldwide</span>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="md:w-1/2"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                  placeholder="Your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <ToastContainer containerId="emailToast" limit={1} />
    </div>
  );
}

export default Contact;