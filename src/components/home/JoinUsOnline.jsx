import React from "react";
import { FaPlay } from "react-icons/fa";

const JoinUsOnline = () => {
  return (
    <section id="online" className="bg-purple-50 py-20 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl text-purple-600 font-extrabold mb-6">
            Join Us Online
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Can’t make it to our Sunday service or special events? Don’t worry — Kingdom Prevailers International Christian Centre is 
            live streaming all our services so you can worship, be inspired, and experience God’s love from the comfort of your home.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Wherever you are in the world, there’s a place for you to connect with our community. Feel the energy of live worship, 
            hear messages of hope and encouragement, and join in fellowship online — because distance should never separate you from 
            the life-changing power of God’s Word.
          </p>

          {/* Watch Now Button */}
          <a
            href="/live" // Replace with actual streaming link
            className="mt-6 inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-colors"
          >
            <FaPlay className="mr-2" /> Watch Now
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 relative">
          <div className="rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-500 p-2 w-full">
            <img
              src="/images/join-us-online.webp" // Replace with your actual image
              alt="Join us online"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsOnline;
