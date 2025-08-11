import React from "react";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-purple-900">Get in Touch</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions, testimonies, or prayer requests, our doors and hearts are
            open to you. Reach out to us anytime.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-10 border border-purple-100">
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-800">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="mt-3 block w-full py-4 rounded-lg border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 placeholder:px-3"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-800">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="mt-3 block w-full py-4 rounded-lg border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 placeholder:px-3"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="mt-3 block w-full py-4 rounded-lg border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 placeholder:px-3"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Church Info */}
          <div className="bg-purple-800 text-white rounded-2xl p-10 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-8">
                Kingdom Prevailers International Christian Centre
              </h3>
              <div className="space-y-6">
                <p className="flex items-start">
                  <FaMapPin className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  39 Road 3rd Avenue, Gwarimpa, Abuja, Nigeria
                </p>
                <p className="flex items-start">
                  <FaPhone className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  +234 *** *** ****
                </p>
                <p className="flex items-start">
                  <FaEnvelope className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  info@kingdomprevailers.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;