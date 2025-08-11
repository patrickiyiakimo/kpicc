import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white min-h-screen flex items-center px-6 md:px-16 lg:px-32">
      {/* Background subtle overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 opacity-80"
      ></div>

      {/* Content container */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide mb-6 drop-shadow-lg">
          Kingdom Prevailers <br /> International Christian Centre
        </h1>

        <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto mb-10 drop-shadow-md">
          A place where faith meets maturity, and God&apos;s love prevails.
          <br />
          Join us to grow spiritually and walk victoriously.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="/contact"
            className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-purple-900 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
