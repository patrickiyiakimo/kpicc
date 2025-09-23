import React from "react";

const ConnectWithUs = () => {
  return (
    <section id="connect" className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl text-purple-600 font-extrabold mb-6">
            Connect With Us
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            At Kingdom Prevailers International Christian Centre, there is a place for everyone — especially you. 
            We are a vibrant community that embraces people from all walks of life, different ethnicities, and backgrounds.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            No matter where you come from or what stage of life you are in, you are welcome here. Our goal is to create a 
            loving, supportive, and spiritually enriching environment where every individual can grow, belong, and experience 
            the transformative love of God.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Join us, meet others, share in fellowship, and become part of a family committed to celebrating diversity and walking 
            together in faith, hope, and joy.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 relative">
          <div className="rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-500 p-2 w-full">
            <img
              src="/images/connect-image.webp" // Replace with your actual image
              alt="Connecting community"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
