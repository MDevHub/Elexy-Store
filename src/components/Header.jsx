import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo-2.png";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState({ pages: false });
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleClickOutside = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) &&
      overlayRef.current && !overlayRef.current.contains(e.target)
    ) {
      setMobileOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full max-w-screen">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed w-full m-auto justify-between py-5 pl-4 pr-4 items-center bg-white shadow-md z-[9999]">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex gap-8 text-[16px] items-center">
            <li>
              <Link to="/" className="hover:text-gray-500">Home</Link>
            </li>
            <li>
              <Link className="hover:text-gray-500">Shop</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-500">Products</Link>
            </li>
            
            <li>
              <Link to="/contact" className="hover:text-gray-500">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between py-5 px-6 bg-white shadow-md">
        <img src={logo} alt="logo" className="h-8 " />
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-2xl">
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Overlay */}
      {mobileOpen && (
        <div ref={overlayRef} className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 bg-[white] shadow-lg z-50  transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pb-1 bg-[#f0efefc9] pl-6">
          <img src={logo} alt="" className="mb-3 pt-6" />
        </div>
        <hr className="border bg-[#ffffffce]" />
        <ul className="flex flex-col gap-6 pt-5 font-[500] text-[#050505]">
          <li className="pl-6 flex items-center justify-between hover:text-[#050505b6]">
            <Link to="/" className="text-lg" onClick={() => setMobileOpen(false)}>Home</Link>
          </li>
          <hr className="border bg-[#ffffffce]" />
          <li className="pl-6 flex items-center justify-between hover:text-[#050505b6]">
            <Link to="/shop" className="text-lg" onClick={() => setMobileOpen(false)}>Shop</Link>
          </li>
          <hr className="border bg-[#ffffffce]" />
          <li className="pl-6 flex items-center justify-between hover:text-[#050505b6]">
            <Link to="/products" className="text-lg" onClick={() => setMobileOpen(false)}>Products</Link>
          </li>
          <hr className="border bg-[#ffffffce]" />
          <li className="flex items-center justify-between hover:text-[#050505b6]">
            <Link to="/contact" className="text-lg pl-6" onClick={() => setMobileOpen(false)}>Contact</Link>
          </li>
          <hr className="border bg-[#ffffffce]" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
