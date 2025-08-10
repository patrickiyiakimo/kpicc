// import React from "react";
// import menuItems from "../common/menuItems";

// const Navbar = ({ isMenuOpen, toggleMenu }) => {
//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white sticky top-0 z-50">
//       {/* Logo */}
//       <div className="text-2xl font-bold">
//         <a href="/">KPICC</a>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-6">
//         {menuItems.map(({ name, href }) => (
//           <li key={name}>
//             <a href={href} className="hover:text-yellow-300 transition">
//               {name}
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu Button */}
//       <button
//         aria-label="Toggle menu"
//         className="md:hidden text-2xl cursor-pointer focus:outline-none"
//         onClick={toggleMenu}
//       >
//         {isMenuOpen ? "✖" : "☰"}
//       </button>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="absolute top-16 left-0 w-full bg-purple-800 flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-300">
//           {menuItems.map(({ name, href }) => (
//             <li key={name}>
//               <a href={href} onClick={toggleMenu} className="hover:text-yellow-300">
//                 {name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React from "react";
// import menuItems from "../common/menuItems";

// const Navbar = ({ isMenuOpen, toggleMenu }) => {
//   const handleScroll = (e, href) => {
//     e.preventDefault();
//     const targetId = href.replace("#", "");
//     const element = document.getElementById(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       if (isMenuOpen) toggleMenu(); // close mobile menu
//     }
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white sticky top-0 z-50">
//       {/* Logo */}
//       <div className="text-2xl font-bold">
//         <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
//           KPICC
//         </a>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-6">
//         {menuItems.map(({ name, href }) => (
//           <li key={name}>
//             <a
//               href={href}
//               onClick={(e) => handleScroll(e, href)}
//               className="hover:text-yellow-300 transition"
//             >
//               {name}
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu Button */}
//       <button
//         aria-label="Toggle menu"
//         className="md:hidden text-2xl cursor-pointer focus:outline-none"
//         onClick={toggleMenu}
//       >
//         {isMenuOpen ? "✖" : "☰"}
//       </button>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="absolute top-16 left-0 w-full bg-purple-800 flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-300">
//           {menuItems.map(({ name, href }) => (
//             <li key={name}>
//               <a
//                 href={href}
//                 onClick={(e) => handleScroll(e, href)}
//                 className="hover:text-yellow-300"
//               >
//                 {name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import Link from "next/link";
import menuItems from "../common/menuItems";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const handleScroll = (e, href) => {
    // Only run smooth scroll if it's a hash link
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (isMenuOpen) toggleMenu();
    }
  };

  const renderMenuItem = ({ name, href }) => {
    if (href.startsWith("#")) {
      // Same-page scroll
      return (
        <a
          key={name}
          href={href}
          onClick={(e) => handleScroll(e, href)}
          className="hover:text-yellow-300 transition"
        >
          {name}
        </a>
      );
    } else {
      // Next.js page navigation
      return (
        <Link key={name} href={href} className="hover:text-yellow-300 transition">
          {name}
        </Link>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="/" onClick={(e) => handleScroll(e, "/")}>
          KPICC
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">{menuItems.map(renderMenuItem)}</ul>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle menu"
        className="md:hidden text-2xl cursor-pointer focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-purple-800 flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-300">
          {menuItems.map((item) => (
            <li key={item.name} onClick={toggleMenu}>
              {renderMenuItem(item)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
