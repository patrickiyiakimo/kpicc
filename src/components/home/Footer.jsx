import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-gray-300 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Kingdom Prevailers</h3>
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
            {/* <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/sermons" className="hover:text-yellow-400 transition">
                Sermons
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-yellow-400 transition">
                Events
              </a>
            </li> */}
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
          <p>Phone: +234 *** *** ****</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/kingdomprevailers"
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
              href="https://twitter.com/kingdomprevailers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.95.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482A13.951 13.951 0 0 1 1.671 3.15a4.917 4.917 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616v.06a4.919 4.919 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.417A9.866 9.866 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.056 0 14.009-7.513 14.009-14.009 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/kingdomprevailers"
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
