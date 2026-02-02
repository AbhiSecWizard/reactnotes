import { NavLink } from "react-router-dom";
import { FaHome, FaServicestack, FaPhoneAlt, FaInfoCircle, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition
     ${isActive ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-blue-100"}`;

  return (
    <header className="bg-black shadow-md">
      <div className=" relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src="../../assets/logo.png" alt="" className=" absolute mt-15 cursor-pointer"  height="100px" width="150px"/>
        <h1></h1>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4">
          <NavLink to="/" className={linkClass}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/service" className={linkClass}>
            <FaServicestack /> Service
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <FaPhoneAlt /> Contact
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <FaInfoCircle /> About
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t flex flex-col gap-2 px-4 py-3">
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/service" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaServicestack /> Service
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaPhoneAlt /> Contact
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
            <FaInfoCircle /> About
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
