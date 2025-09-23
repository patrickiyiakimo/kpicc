'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBible, FaPrayingHands, FaChurch } from "react-icons/fa";

const slidesData = [
  {
    id: 1,
    title: "Faith",
    desc: "Walk by faith and not by sight.",
    stats: [
      { label: "Scripture", value: "2 Corinthians 5:7" },
      { label: "Members", value: "500+" },
    ],
    icon: <FaPrayingHands size={32} />,
    color: "from-purple-700 via-indigo-600 to-blue-600",
  },
  {
    id: 2,
    title: "Love",
    desc: "Love your neighbor as yourself.",
    stats: [
      { label: "Scripture", value: "Matthew 22:39" },
      { label: "Members", value: "500+" },
    ],
    icon: <FaBible size={32} />,
    color: "from-yellow-500 via-orange-400 to-red-500",
  },
  {
    id: 3,
    title: "Worship",
    desc: "Enter His gates with thanksgiving.",
    stats: [
      { label: "Scripture", value: "Psalm 100:4" },
      { label: "Members", value: "500+" },
    ],
    icon: <FaChurch size={32} />,
    color: "from-green-500 via-teal-400 to-cyan-500",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center pt-20 text-white overflow-hidden pb-24 md:pb-12" 
      style={{
        backgroundImage: "url('/images/kpicc-hero.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        maxHeight: "900px",
      }}
    >
      {/* Darkened Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40 backdrop-blur-sm"></div>

      {/* Left Side Content */}
      <div className="relative z-10 flex-1 flex flex-col items-start text-left px-6 md:px-16 lg:px-32 py-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide mb-6 text-yellow-100 drop-shadow-xl"
        >
          Kingdom Prevailers <br /> International Christian Centre
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-2xl text-white/90 max-w-3xl mb-10 drop-shadow-md"
        >
          A place where faith meets maturity, and God&apos;s love prevails.
          <br />
          Join us to grow spiritually and walk victoriously.
        </motion.p>
      </div>

      {/* Right Side - Vertical Carousel */}
      <div className="relative w-full lg:flex-1 max-w-md mt-12 lg:mt-0 flex flex-col space-y-4 pb-16 md:pb-12 px-6 md:px-12 z-10">
        {slidesData.map((slide, i) => {
          const isActive = i === active;
          const isAbove = i === (active - 1 + slidesData.length) % slidesData.length;
          const isBelow = i === (active + 1) % slidesData.length;

          let scale = 0.9;
          let opacity = 0.5;
          if (isActive) scale = 1;
          if (isAbove || isBelow) scale = 0.85;
          if (isActive) opacity = 1;
          if (isAbove || isBelow) opacity = 0.7;

          return (
            <motion.div
              key={slide.id}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity, scale }}
              transition={{ duration: 0.5, ease: "linear" }}
              className={`rounded-2xl overflow-hidden cursor-pointer 
                bg-gradient-to-br ${slide.color} bg-opacity-90 backdrop-blur-md shadow-lg shadow-black/50`}
              onClick={() => setActive(i)}
            >
              {isActive ? (
                <div className="p-6 flex flex-col text-center ">
                  <div className="flex justify-center">{slide.icon}</div>
                  <h3 className="text-xl font-bold drop-shadow-md">{slide.title}</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm">{slide.desc}</p>
                  <div className="grid grid-cols-1 gap-2 text-sm text-white/80 mt-2">
                    {slide.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between border-b border-white/20 py-1"
                      >
                        <span>{stat.label}</span>
                        <span className="font-semibold text-yellow-200">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-4 flex items-center justify-center space-x-2">
                  {slide.icon}
                  <h3 className="text-md font-semibold drop-shadow-md">{slide.title}</h3>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
