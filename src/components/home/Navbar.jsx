"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaBible } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Upcoming Events", href: "/events" },
    { label: "Faq", href: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-black/90 via-purple-900/80 to-black/90 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: [0, 15, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/images/IMG_6680.jpg" alt="kpicc image" width={30} height={30} className="rounded-full"/>
          </motion.div>
          <div>
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              KPICC
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href={item.href}
                    className="font-semibold text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #facc15" }}
            >
              <Link
                href="/contact"
                className="px-5 py-2 font-semibold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-black shadow-md hover:shadow-yellow-300 transition-all duration-300"
              >
                Contact
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #facc15" }}
            >
              <Link
                href="/"
                className="px-5 py-2 font-semibold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-black shadow-md hover:shadow-pink-300 transition-all duration-300"
              >
                Give Online
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col space-y-6 bg-black/95 px-6 py-6 border-t border-gray-700"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-white font-semibold transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
              <Link
                href="/contact"
                className="w-full text-center px-4 py-2 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-black font-semibold shadow-md hover:shadow-yellow-300 transition-all duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href="/"
                className="w-full text-center px-4 py-2 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-black font-semibold shadow-md hover:shadow-pink-300 transition-all duration-300"
                onClick={toggleMenu}
              >
                Give Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
