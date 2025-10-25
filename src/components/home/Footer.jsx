import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-gray-300 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center mb-4">
          <Image src="/images/IMG_6680.jpg" alt="kpicc image" width={30} height={30} className="rounded-full"/>
          <h3 className="text-white text-xl font-semibold pl-2">Kingdom Prevailers</h3>
          </div>
        
          <p className="text-gray-400 leading-relaxed">
            Kingdom Prevailers International Christian Centre is committed to nurturing faith, hope,
            and love in our community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <p>39 Road, 3rd Avenue Gwarimpa, Abuja, Nigeria</p>
          <p>Email: info@kingdomprevailers.org</p>
          {/* <p>Phone: +234 *** *** ****</p> */}
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
               <a
              href="https://www.youtube.com/@kingdomprevailersinternational"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-400 transition"
            >
             <FaYoutube className="w-7 h-7 fill-current" />
            </a>
            <a
              href="https://www.facebook.com/share/1EWnKA2q4r/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .592 0 1.322v21.354C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.098 2.798.143v3.24l-1.922.001c-1.507 0-1.8.718-1.8 1.77v2.318h3.596l-.468 3.622h-3.128V24h6.128C23.406 24 24 23.406 24 22.676V1.322C24 .592 23.406 0 22.675 0z" />
              </svg>
            </a>

           <a
              href="https://www.tiktok.com/@kingdomprevailers?_t=ZS-90APPmsbkgq&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-yellow-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.75 2h3.25a5.75 5.75 0 0 0 5.75 5.75v3.25a8.99 8.99 0 0 1-5.5-1.84v7.34a7.5 7.5 0 1 1-7.5-7.5c.26 0 .52.02.77.04V12a3.75 3.75 0 1 0 3.75 3.75V2z" />
              </svg>
            </a>


            <a
              href="https://www.instagram.com/kingdomprevailers_?igsh=M3ZpY3NzOWc1eW1y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 0 1 4.25 4.25v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5a4.25 4.25 0 0 1 4.25-4.25zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.75-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kingdom Prevailers International Christian Centre. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
