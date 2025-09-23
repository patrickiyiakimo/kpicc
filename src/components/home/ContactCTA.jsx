import React from "react";

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get in Touch with Us
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
            Whether you have questions, prayer requests, or want to get involved, we are here to listen
            and support you. Our community is ready to welcome you with open arms.
          </p>
        </div>

        {/* Button Section */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-purple-900 px-10 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-300 shadow-xl transition transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
