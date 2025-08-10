"use client";

import Navbar from "@/components/home/Navbar";
import React, { useState } from "react";

const NavbarContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
};

export default NavbarContainer;
