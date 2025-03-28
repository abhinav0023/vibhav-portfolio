import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyLogo</div>
      <div className={`navbar__links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
      <div className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>☰</div>
    </nav>
  );
};

export default Navbar;
