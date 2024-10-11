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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update form data
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // `http://localhost:8000/api/send-email`,
        `https://email-sender-service-gnfi.onrender.com/api/send-email`,
        formData
      );
      if (response.status === 200) {
        toast.success("Your message has been sent successfully!", {
          position: "top-right", // Position of the toast
          autoClose: 3000, // Auto close duration
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        setFormData(initialFormData); // Clear form on successful submission
      }
    } catch (error) {
      toast.error("Failed to send your message. Please try again.", {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto close duration
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div
      className="container overflow-x-hidden mx-auto py-12 px-6"
      id="contact"
      data-aos="fade-up"
      data-aos-offset="300"
    >
      <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
        Get in Touch
      </h2>
      <div className="md:flex">
        <div className="md:w-1/3 md:pr-8">
          <p className="text-gray-700 mb-4" data-aos="fade-right" data-aos-delay="400">
            Want to work together or have a question? Send me a message and I'll
            get back to you as soon as possible.
          </p>
        </div>
        <div className="md:w-2/3 relative" data-aos="fade-left" data-aos-delay="400">
          <form className="flex-col text-left items-center" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-4">
              <div className="mb-4 w-full">
                <label htmlFor="name" className="text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          {/* <div className="w-25 h-16 bg-slate-500 fixed top-0 left-0">hellow </div>  */}
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
