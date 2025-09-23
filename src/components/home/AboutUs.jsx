'use client';

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="bg-black py-20 px-6 md:px-16 lg:px-32 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Image with Purple Backplate */}
        <div className="flex-1 relative flex flex-col items-center">
          {/* Purple Backplate */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-500 p-2 w-full">
            {/* Actual Image */}
            <img
              src="/images/welcome-image.webp"
              alt="Welcoming community"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform hover:scale-105"
            />
          </div>

          {/* About Us Button with slanted sides */}
          <Link
            href="/about"
            className="mt-6 relative inline-flex items-center justify-between bg-purple-600 text-white font-semibold px-8 py-3 shadow-lg overflow-hidden group w-44
                      [clip-path:polygon(10%_0%,90%_0%,80%_100%,0%_100%)] transition-colors hover:bg-purple-700"
          >
            <span className="relative z-10">About Us</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center justify-center ml-2"
            >
              <FaArrowRight className="w-4 h-4 text-white" />
            </motion.span>
          </Link>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl text-purple-600 font-extrabold mb-6">
            Welcome to Kingdom Prevailers
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            We warmly welcome you into a community overflowing with the love of God. Kingdom Prevailers
            International Christian Centre is a place where hearts are nurtured, lives are transformed,
            and faith comes alive.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Here, you’ll experience genuine care, uplifting fellowship, and opportunities to grow spiritually
            while sharing God’s love with others. Whether you’re new to faith or walking with Christ for years,
            you belong here.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Come and be part of a family committed to showing God’s love in action and walking together
            in faith, hope, and joy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
